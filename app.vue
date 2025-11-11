<template>
  <div class="bg-[#FCFDF9]">
    <!-- <NuxtLayout> -->
    <NuxtPage />
    <Toaster position="top-right" rich-colors close-button />
    <!-- </NuxtLayout> -->
  </div>
</template>
<script setup>
const auth = useAuthStore();
const profileStore = useProfileStore();
const onRoleBtnClick = async (roleTitle) => {
  try {
    const userId = auth.user?.id;

    profileStore.setUserInfo({ role: roleTitle });
    const res = await profileStore.updateUserInfoOnServer(userId);
    console.log("Role updated on server", res);
  } catch (err) {
    console.error(err);
  }
};

provide("onRoleBtnClick", onRoleBtnClick);
</script>
