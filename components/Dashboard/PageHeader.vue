<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
      <div class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-400"
        >
          <svg
            class="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <h1
          @click="navigateTo('/dashboard')"
          class="text-xl font-bold text-gray-900"
        >
          SEVA
        </h1>
      </div>
      <button
        @click="auth.logout($toast)"
        class="rounded-lg border border-emerald-500 bg-transparent px-4 py-2 text-sm font-semibold text-emerald-500 transition-colors duration-200 hover:bg-emerald-50"
      >
        Logout
      </button>
    </div>
  </header>
</template>
<script setup>
const auth = useAuthStore();

const { $toast } = useNuxtApp();
</script>
