<template>
  <div class="rounded-3xl border border-gray-200 bg-white p-8 text-center">
    <div
      class="mb-6 inline-flex p-4 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400"
    >
      <!-- <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
        />
      </svg> -->
      <icons-role color="white" class="text-2xl" />
    </div>
    <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
      Selected Role
    </p>
    <!-- <p class="mb-3 font-bold text-emerald-500">Supervised Support</p> -->
    <p
      v-if="profileStore.userInfo.role"
      class="text-3xl font-bold text-gray-900"
    >
      {{ profileStore.userInfo.role }}
    </p>
    <dashboard-profile-fall-back v-else />
  </div>
</template>
<script setup>
const profileStore = useProfileStore();
</script>
