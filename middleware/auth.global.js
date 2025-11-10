import { useAuthStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  const loggedIn = auth.isLoggedIn;
  const otpPending = auth.isOtpPending;
  const sessionValid = auth.isSessionValid;

  auth.restoreSession();

  if (!sessionValid) {
    auth.logout();
  }

  if (loggedIn) {
    if (
      to.path === "/auth/signin" ||
      to.path === "/auth/signup" ||
      to.path === "/landing-page" ||
      to.path === "/"
    ) {
      return navigateTo("/dashboard");
    }
  } else if (otpPending) {
    if (to.path !== "/auth/otp-verification") {
      return navigateTo("/auth/otp-verification");
    }
  } else {
    if (
      to.path !== "/" &&
      to.path !== "/auth/signin" &&
      to.path !== "/auth/signup" &&
      to.path !== "/landing-page"
    ) {
      return navigateTo("/auth/signin");
    }
  }
});
