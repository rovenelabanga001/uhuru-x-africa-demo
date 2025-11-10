<template>
  <div class="rounded-3xl border border-gray-200 bg-white p-8 md:col-span-2">
    <div class="mb-8 flex items-start justify-between">
      <div>
        <p class="mb-2 text-xs font-semibold uppercase text-emerald-500">
          Profile Information
        </p>
        <h3 class="text-4xl font-bold text-gray-900">
          {{ auth.user?.fullname }}
        </h3>
      </div>
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400"
      >
        <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      </div>
    </div>

    <!-- Profile Details -->
    <div class="space-y-6">
      <div>
        <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
          Email Address
        </p>
        <p class="text-lg font-semibold text-gray-900">
          {{ auth.user?.email }}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Region
          </p>
          <p
            v-if="profileStore.userInfo?.region"
            class="font-semibold text-gray-900"
          >
            {{ profileStore.userInfo?.region }}
          </p>
          <dashboard-profile-fall-back v-else />
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Language
          </p>
          <p
            v-if="profileStore.userInfo?.language"
            class="font-semibold text-gray-900"
          >
            {{ profileStore.userInfo?.language }}
          </p>
          <dashboard-profile-fall-back v-else />
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Age Range
          </p>
          <p
            v-if="profileStore.userInfo.age_range"
            class="font-semibold text-gray-900"
          >
            {{ profileStore.userInfo?.age_range }}
          </p>
          <dashboard-profile-fall-back v-else />
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Gender
          </p>
          <p
            v-if="profileStore.userInfo?.gender"
            class="font-semibold text-gray-900"
          >
            {{ profileStore.userInfo?.gender }}
          </p>
          <dashboard-profile-fall-back v-else />
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Employment Status
          </p>
          <p
            v-if="profileStore.userInfo?.employment_status"
            class="font-semibold text-gray-900"
          >
            {{ profileStore.userInfo?.employment_status }}
          </p>
          <dashboard-profile-fall-back v-else />
        </div>
        <!-- <div>
          <p class="mb-2 text-xs font-semibold uppercase text-gray-500">
            Join Date
          </p>
          <p class="font-semibold text-gray-900">
            {{ userInfo.joinDate }}
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const auth = useAuthStore();
const profileStore = useProfileStore();
</script>
