export default defineNuxtPlugin(() => {
  const profileStore = useProfileStore();

  const savedInfo = localStorage.getItem("profileStore");
  if (savedInfo) {
    profileStore.userInfo = JSON.parse(savedInfo);
  }

  watch(
    () => profileStore.userInfo,
    (newInfo) => {
      localStorage.setItem("profileStore", JSON.stringify(newInfo));
    },
    { deep: true }
  );
});
