import { defineStore } from "pinia";
import * as emailjs from "@emailjs/browser";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
    otp: null,
    otpExpiresAt: null,
    otpVerified: false,
    sessionStart: localStorage.getItem("sessionStart") || null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token && !!state.user,
    isOtpPending: (state) =>
      !!state.token && !!state.user && !state.otpVerified,
    isSessionValid: (state) => {
      if (!state.sessionStart) return false;
      const now = Date.now();
      const expiryTime = 24 * 60 * 60 * 1000;
      return now - state.sessionStart < expiryTime;
    },
  },

  actions: {
    async login(formData, toast) {
      const config = useRuntimeConfig();
      const profileStore = useProfileStore();

      try {
        const users = await $fetch(
          `${config.public.baseUrl}/users?email=${formData.email}`
        );

        const user = users[0];

        if (!user || user.password != formData.password) {
          toast.error("Invalid username or password");
          return false;
        }

        if (user.userInfo) {
          profileStore.setUserInfo(user.userInfo);
        }

        const { password, userInfo, ...safeUser } = user;

        this.user = safeUser;
        this.token = crypto.randomUUID();
        this.sessionStart = Date.now();

        const otpSent = await this.sendOtp(user.email);
        if (!otpSent) {
          toast.error("Failed to send OTP. Please try again later.");
          return false;
        }

        localStorage.setItem("user", JSON.stringify(safeUser));
        localStorage.setItem("token", this.token);
        localStorage.setItem("sessionStart", this.sessionStart);

        navigateTo("/auth/otp-verification");
      } catch (err) {
        console.error(err);
        toast.error("Login failed. Try again later");
        return false;
      }
    },
    logout(toast) {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("sessionStart");
      localStorage.removeItem("profileStore");
      if (toast) toast.success("Logged out successfully");
      navigateTo("/auth/signin");
    },
    getUser() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.token = localStorage.getItem("token");
      }
    },
    restoreSession() {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      const storedSession = localStorage.getItem("sessionStart");

      if (storedUser && storedToken && storedSession) {
        const now = Date.now();

        if (now - Number(storedSession) > 24 * 60 * 60 * 1000) {
          this.logout();
        } else {
          this.user = JSON.parse(storedUser);
          this.token = storedToken;
          this.storedSession = Number(storedSession);
        }
      }
    },
    generateOtp() {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      this.otp = otp;
      const expiry = Date.now() + 5 * 60 * 1000;
      this.otpExpiresAt = expiry;
      return { otp, expiry };
    },
    async sendOtp(email) {
      const config = useRuntimeConfig();
      const { otp, expiry } = this.generateOtp();

      const expiryTime = new Date(expiry).toLocaleTimeString();

      try {
        await emailjs.send(
          config.public.EMAILJS_SERVICE_ID,
          config.public.EMAILJS_TEMPLATE_ID,
          {
            email: email,
            otp: otp,
            expiryTime: expiryTime,
          },
          config.public.EMAILJS_PUBLIC_KEY
        );
        console.log("Sending OTP via EmailJS with:", {
          service_id: config.public.EMAILJS_SERVICE_ID,
          template_id: config.public.EMAILJS_TEMPLATE_ID,
          public_key: config.public.EMAILJS_PUBLIC_KEY,
          to_email: email,
          passcode: otp,
          time: expiryTime,
        });
        return true;
      } catch (err) {
        console.error("Failed to send OTP:", err);
        return false;
      }
    },
    verifyOtp(inputOtp, toast) {
      if (!this.otp || Date.now() > this.otpExpiresAt) {
        this.user = null;
        this.token = null;

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        toast?.error("OTP expired. Please login Again");
        navigateTo("/auth/signin", { replace: true });
        return false;
      }

      if (inputOtp !== this.otp) {
        toast?.error("Invalid OTP. Try again");
        return false;
      }

      toast?.success("OTP verified. Login successfull");

      this.otpVerified = true;
      this.otp = null;
      this.otpExpiresAt = null;
      navigateTo("/profile/setup", { replace: true });
      return true;
    },
  },
});
