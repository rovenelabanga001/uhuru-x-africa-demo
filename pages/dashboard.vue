<template>
  <div
    class="min-h-screen"
    :style="{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text-primary)',
    }"
  >
    <!-- Navigation Header -->
    <header
      class="border-b"
      :style="{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            :style="{
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
            }"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h1
            class="text-xl font-bold"
            :style="{ color: 'var(--color-text-primary)' }"
          >
            SEVA
          </h1>
        </div>
        <button
          @click="logout"
          class="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          :style="{
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary)',
            backgroundColor: 'transparent',
          }"
          @mouseover="
            $event.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)'
          "
          @mouseout="$event.target.style.backgroundColor = 'transparent'"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-12">
      <!-- Hero Section -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-4">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            :style="{ color: 'var(--color-primary)' }"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
            />
          </svg>
          <span :style="{ color: 'var(--color-text-secondary)' }"
            >Welcome back to your learning journey</span
          >
        </div>
        <h2
          class="text-5xl font-bold mb-2"
          :style="{ color: 'var(--color-text-primary)' }"
        >
          Hello, {{ userProfile.fullName }}! 👋
        </h2>
        <p class="text-lg" :style="{ color: 'var(--color-text-secondary)' }">
          Here's your profile and learning progress
        </p>
      </div>

      <!-- Profile Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Main Profile Card -->
        <div
          class="lg:col-span-2 rounded-2xl p-8 border"
          :style="{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }"
        >
          <div class="flex items-start justify-between mb-8">
            <div>
              <p
                class="text-xs font-semibold uppercase mb-2"
                :style="{ color: 'var(--color-primary)' }"
              >
                Profile Information
              </p>
              <h3
                class="text-3xl font-bold"
                :style="{ color: 'var(--color-text-primary)' }"
              >
                {{ userProfile.fullName }}
              </h3>
            </div>
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center"
              :style="{
                background:
                  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
              }"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
          </div>

          <!-- Profile Details -->
          <div class="space-y-6">
            <div>
              <p
                class="text-xs font-semibold uppercase mb-2"
                :style="{ color: 'var(--color-text-secondary)' }"
              >
                Email Address
              </p>
              <p
                class="text-lg font-semibold"
                :style="{ color: 'var(--color-text-primary)' }"
              >
                {{ userProfile.email }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p
                  class="text-xs font-semibold uppercase mb-2"
                  :style="{ color: 'var(--color-text-secondary)' }"
                >
                  Region
                </p>
                <p
                  class="text-base font-semibold"
                  :style="{ color: 'var(--color-text-primary)' }"
                >
                  {{ userProfile.region || "Not specified" }}
                </p>
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase mb-2"
                  :style="{ color: 'var(--color-text-secondary)' }"
                >
                  Language
                </p>
                <p
                  class="text-base font-semibold"
                  :style="{ color: 'var(--color-text-primary)' }"
                >
                  {{ userProfile.language || "Not specified" }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Role Badge Card -->
        <div
          class="rounded-2xl p-8 border overflow-hidden"
          :style="{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }"
        >
          <div class="text-center">
            <div
              class="inline-block w-16 h-16 rounded-full flex items-center justify-center mb-6"
              :style="{
                background:
                  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
              }"
            >
              <svg
                v-if="userProfile.role === 'SEVA'"
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
                />
              </svg>
              <svg
                v-else
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
                />
              </svg>
            </div>
            <p
              class="text-xs font-semibold uppercase mb-2"
              :style="{ color: 'var(--color-text-secondary)' }"
            >
              Selected Role
            </p>
            <p
              class="font-bold text-sm mb-3"
              :style="{ color: 'var(--color-primary)' }"
            >
              {{
                userProfile.role === "SEVA"
                  ? "Supervised Support"
                  : "Autonomous Platform"
              }}
            </p>
            <p
              class="text-2xl font-bold"
              :style="{ color: 'var(--color-text-primary)' }"
            >
              {{ userProfile.role }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface UserProfile {
  fullName: string;
  email: string;
  region: string;
  language: string;
  ageRange: string;
  gender: string;
  employmentStatus: string;
  role: string;
  goals: string[];
  joinDate: string;
}

const userProfile = ref<UserProfile>({
  fullName: "",
  email: "",
  region: "",
  language: "",
  ageRange: "",
  gender: "",
  employmentStatus: "",
  role: "",
  goals: [],
  joinDate: new Date().toISOString(),
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

onMounted(() => {
  userProfile.value.fullName = localStorage.getItem("fullName") || "User";
  userProfile.value.email = localStorage.getItem("email") || "user@example.com";
  userProfile.value.region = localStorage.getItem("region") || "";
  userProfile.value.language = localStorage.getItem("language") || "";
  userProfile.value.ageRange = localStorage.getItem("ageRange") || "";
  userProfile.value.gender = localStorage.getItem("gender") || "";
  userProfile.value.employmentStatus =
    localStorage.getItem("employmentStatus") || "";
  userProfile.value.role =
    localStorage.getItem("selectedRole") || "Not selected";
  userProfile.value.goals = JSON.parse(localStorage.getItem("goals") || "[]");
  userProfile.value.joinDate =
    localStorage.getItem("joinDate") || new Date().toISOString();
});
</script>

<style>
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-surface-light: #f3f4f6;
  --color-primary: #10b981;
  --color-primary-light: #34d399;
  --color-accent: #fbbf24;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border: #d1d5db;
  --color-success: #10b981;
  --color-warning: #f59e0b;
}
</style>
