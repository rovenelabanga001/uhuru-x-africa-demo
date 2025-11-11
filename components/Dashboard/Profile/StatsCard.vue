<template>
  <div class="rounded-3xl border border-gray-200 bg-white p-8">
    <p class="mb-6 text-xs font-semibold uppercase text-gray-500">
      Learning Stats
    </p>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-gray-600">Profile Completion</span>
        <span class="font-bold text-emerald-500"
          >{{ profileStore.profileProgress }}%</span
        >
      </div>
      <div class="h-2 w-full rounded-full bg-gray-200">
        <div
          class="h-full rounded-full bg-emerald-500 transition-all duration-500"
          :style="{ width: profileStore.profileProgress + '%' }"
        ></div>
      </div>
      <button
        @click="handleProfileNavigation"
        class="border border-2 border-emerald-500 px-3 py-1 rounded-full mt-5"
      >
        <span
          class="text-emerald-500"
          v-if="profileStore.profileProgress === 100"
          >Update Profile</span
        >
        <span
          class="text-emerald-500"
          v-else-if="profileStore.profileProgress !== 100"
          >Complete Profile</span
        >
      </button>
    </div>
  </div>
</template>
<script setup>

const profileStore = useProfileStore();

profileStore.calculateProfileProgress();
console.log(profileStore.profileProgress);
const handleProfileNavigation = () => {
  const userInfo = profileStore.userInfo;

  const hasDemographics =
    userInfo.region &&
    userInfo.language &&
    userInfo.age_range &&
    userInfo.gender &&
    userInfo.employment_status &&
    userInfo.goals?.length > 0;

  const hasRole = userInfo.role && userInfo.role.trim() !== "";
  const hasInterests =
    Array.isArray(userInfo.interests) && userInfo.interests.length > 0;

  // CASE 1: Nothing filled → start at setup
  if (!hasDemographics && !hasRole && !hasInterests) {
    navigateTo("/profile/setup");
    return;
  }

  // CASE 2: Demographics filled but no role yet → go to roles
  if (hasDemographics && !hasRole) {
    navigateTo("/profile/roles");
    return;
  }

  // CASE 3: Demographics + role filled, but no interests → go to onboarding
  if (hasDemographics && hasRole && !hasInterests) {
    navigateTo("/profile/onboarding");
    return;
  }

  // CASE 4: All filled → go to setup (profile review/edit)
  if (hasDemographics && hasRole && hasInterests) {
    navigateTo("/profile/setup");
    return;
  }

  // Default fallback
  navigateTo("/profile/setup");
};

// const handleProfileNavigation = () => {
//   const userInfo = profileStore.userInfo;
//   //Case 1: Profile 0% or 100% complete -> Go to setup
//   if (
//     profileStore.profileProgress === 0 ||
//     profileStore.profileProgress === 100
//   ) {
//     navigateTo("/profile/setup");
//   }

//   //Case 2: Only the first set of details filled
//   if (
//     profileStore.userInfo.region &&
//     profileStore.userInfo.language &&
//     profileStore.userInfo.age_range &&
//     profileStore.userInfo.gender &&
//     profileStore.userInfo.employment_status &&
//     profileStore.userInfo.goals?.length > 0 &&
//     !profileStore.userInfo.role
//   ) {
//     navigateTo("profile/roles");
//     return;
//   }

//   //Case 3: First + role_filled -> Go to interests
//   if (
//     profileStore.userInfo.region &&
//     profileStore.userInfo.language &&
//     profileStore.userInfo.age_range &&
//     profileStore.userInfo.gender &&
//     profileStore.userInfo.employment_status &&
//     profileStore.userInfo.goals?.length &&
//     profileStore.userInfo.role &&
//     !profileStore.userInfo.role &&
//     !profileStore.userInfo.interests?.length
//   ) {
//     navigateTo("/profile/onboarding");
//     return;
//   }

//   navigateTo("profile/setup");
// };
</script>
