<template>
  <div class="flex items-center justify-center gap-2 mb-16 px-4 w-full">
    <!-- Step 1: Demographics -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-green-500': hasDemographics,
          'bg-gray-300': !hasDemographics,
        }"
      >
        <template v-if="hasDemographics">
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
        <template v-else>
          <span class="font-bold text-gray-800">1</span>
        </template>
      </div>
      <p
        class="text-xs font-semibold"
        :class="hasDemographics ? 'text-green-500' : 'text-gray-400'"
      >
        Demographics
      </p>
    </div>

    <!-- Line 1 -->
    <div
      class="flex-grow h-1 mx-1 md:mx-2 mb-8 transition-all duration-300"
      :class="hasDemographics ? 'bg-green-500' : 'bg-gray-300'"
    ></div>

    <!-- Step 2: Role -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-green-500': hasRole,
          'bg-yellow-400': hasDemographics && !hasRole,
          'bg-gray-300': !hasDemographics,
        }"
      >
        <template v-if="hasRole">
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
        <template v-else>
          <span class="font-bold text-gray-800">2</span>
        </template>
      </div>
      <p
        class="text-xs font-semibold"
        :class="{
          'text-green-500': hasRole,
          'text-gray-800': hasDemographics && !hasRole,
          'text-gray-400': !hasDemographics,
        }"
      >
        Role
      </p>
    </div>

    <!-- Line 2 -->
    <div
      class="flex-grow h-1 mx-1 md:mx-2 mb-8 transition-all duration-300"
      :class="hasRole ? 'bg-green-500' : 'bg-gray-300'"
    ></div>

    <!-- Step 3: Interests -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-green-500': hasInterests,
          'bg-gray-300': !hasInterests,
        }"
      >
        <template v-if="hasInterests">
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
        <template v-else>
          <span class="font-bold text-gray-800">3</span>
        </template>
      </div>
      <p
        class="text-xs font-semibold"
        :class="hasInterests ? 'text-green-500' : 'text-gray-400'"
      >
        Interests
      </p>
    </div>
  </div>
</template>

<script setup>
const profileStore = useProfileStore();
const userInfo = computed(() => profileStore.userInfo);

// Step 1: Demographics completion
const hasDemographics = computed(() => {
  const u = userInfo.value;
  return (
    u.region &&
    u.language &&
    u.age_range &&
    u.gender &&
    u.employment_status &&
    u.goals?.length > 0
  );
});

// Step 2: Role
const hasRole = computed(() => {
  const u = userInfo.value;
  return u.role && u.role.trim() !== "";
});

// Step 3: Interests
const hasInterests = computed(() => {
  const u = userInfo.value;
  return Array.isArray(u.interests) && u.interests.length > 0;
});
</script>
