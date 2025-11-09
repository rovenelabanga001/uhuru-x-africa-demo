import { useAuthStore } from "~/stores/authStore";

export default defineNuxtPlugin(() => {
  const auth = useAuthStore();
  auth.restoreSession();

  watch(
    () => [auth.user, auth.token],
    (user, token) => {
      if (user) localStorage.setItem("user", JSON.stringify(user));
      if (token) localStorage.setItem("token", token);
    }
  );
});
