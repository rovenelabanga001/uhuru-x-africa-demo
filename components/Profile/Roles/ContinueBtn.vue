<template>
  <button
    class="w-[50%] bg-green-500 text-white p-3 rounded-full cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
    :disabled="!profileStore.userInfo.role || loading"
    @click="handleContinue"
  >
    Continue
  </button>
</template>
<script setup>
const profileStore = useProfileStore();

const loading = ref(false);

const handleContinue = async () => {
  if (!profileStore.userInfo.role) return;
  loading.value = true;
  try {
    await navigateTo("/profile/onboarding");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
