<template>
  <div class="min-h-screen bg-cream p-6 flex flex-col">
    <!-- Header -->
    <div class="max-w-6xl mx-auto w-full">
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
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12 w-full">
      <profile-roles-break-down-card />
      <!-- <profile-roles-card :is-break-down="true" :role-info="roleTxt" /> -->
    </div>

    <!-- Comparison Table -->
    <div
      class="max-w-6xl mx-auto bg-white rounded-lg p-8 border border-gray-200 w-full"
    >
      <h3 class="text-2xl font-bold text-green-900 mb-6">
        Detailed Comparison
      </h3>
      <profile-roles-break-down-table />
    </div>
    <div
      class="max-w-6xl self-center w-full mt-4 flex items-center justify-center"
    >
      <profile-roles-continue-btn />
    </div>
  </div>
</template>

<script setup>
import { roleTxt } from "~/public/role-buttons";
</script>

<style scoped>
.bg-cream {
  background-color: #f5f1e8;
}
</style>
