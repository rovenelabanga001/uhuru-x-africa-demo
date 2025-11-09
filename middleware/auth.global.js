import { useAuthStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth middleware running!", to.path);
  const auth = useAuthStore();

  const loggedIn = auth.isLoggedIn;
  console.log("Logged in?", loggedIn);

  if (loggedIn) {
    if (
      // to.path.startsWith("/auth") ||
      to.path === "/landing-page" ||
      to.path === "/"
    ) {
      return navigateTo("/dashboard");
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
