<template>
  <div class="min-h-screen bg-cream p-6">
    <!-- Header -->
    <div class="max-w-6xl mx-auto">
      <button
        @click="$router.back()"
        class="flex items-center gap-2 text-green-700 mb-8 hover:text-green-900"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back
      </button>

      <h1 class="text-4xl font-bold text-green-900 mb-2">
        Which path is right for you?
      </h1>
      <p class="text-gray-600 mb-12">
        Understand the differences between SEVA and FARMERS to choose your
        learning journey.
      </p>
    </div>

    <!-- Comparison Grid -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
      <profile-roles-break-down-card />
    </div>

    <!-- Comparison Table -->
    <div
      class="max-w-6xl mx-auto bg-white rounded-lg p-8 border border-gray-200"
    >
      <h3 class="text-2xl font-bold text-green-900 mb-6">
        Detailed Comparison
      </h3>
      <profile-roles-break-down-table />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-cream {
  background-color: #f5f1e8;
}
</style>
