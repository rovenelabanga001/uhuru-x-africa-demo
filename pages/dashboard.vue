<template>
  <div class="min-h-screen w-full bg-gray-50 text-gray-900">
    <!-- Navigation Header -->
    <DashboardPageHeader />

    <!-- Main Content -->
    <main class="mx-auto max-w-4xl px-6 py-12">
      <!-- Hero Section -->
      <DashboardHero />

      <!-- Profile Grid -->
      <div class="mb-8 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
        <!-- Main Profile Card -->
        <DashboardProfileMainCard />

        <!-- Role Badge Card -->
        <DashboardProfileRoleCard />

        <!-- Stats Card -->
        <DashboardProfileStatsCard />
      </div>

      <!-- Learning Goals -->
      <div class="rounded-3xl border border-gray-200 bg-white p-8">
        <p class="mb-6 text-xs font-semibold uppercase text-gray-500">
          Learning Goals
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-if="profileStore.userInfo?.goals?.length > 0"
            v-for="goal in userInfo.goals"
            :key="goal"
            class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2"
          >
            <svg
              class="h-4 w-4 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span class="font-medium text-emerald-900">{{ goal }}</span>
          </div>
          <DashboardProfileFallBack v-else />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const auth = useAuthStore();
const profileStore = useProfileStore();

const userInfo = reactive({ ...profileStore.userInfo });
console.log(profileStore.userInfo);
</script>
