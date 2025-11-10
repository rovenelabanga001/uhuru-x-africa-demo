<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-white"
  >
    <!-- Header -->
    <header class="flex items-center gap-4 p-4 md:p-6">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50"
      >
        <span class="text-emerald-700 text-2xl">🌱</span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold text-emerald-900">
        Welcome to SEVA!
      </h1>
    </header>

    <!-- Main Content -->
    <p
      class="px-4 md:px-6 pt-2 pb-4 text-lg md:text-xl font-semibold text-emerald-900"
    >
      Let's personalize your journey. What are you most interested in learning?
    </p>

    <!-- Learning Cards -->
    <main class="px-4 md:px-6 space-y-4 flex-1 pb-28 md:pb-24">
      <label
        v-for="option in learningOptions"
        :key="option.id"
        class="flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-gray-200 bg-white cursor-pointer transition-all duration-200 hover:border-emerald-300"
        :class="{
          'border-emerald-800 bg-emerald-50': selectedOptions.includes(
            option.id
          ),
        }"
      >
        <div
          class="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-emerald-800 text-2xl md:text-3xl"
        >
          {{ option.icon }}
        </div>
        <div class="flex-grow">
          <p class="font-bold text-emerald-900 text-base md:text-lg">
            {{ option.title }}
          </p>
          <p class="text-sm md:text-base text-gray-600">
            {{ option.description }}
          </p>
        </div>
        <input
          type="checkbox"
          :checked="profileStore.userInfo.interests.includes(option.id)"
          @change="toggleOption(option.id)"
          class="h-6 w-6 md:h-7 md:w-7 rounded-lg border-2 border-gray-300 accent-emerald-800 cursor-pointer"
        />
      </label>
    </main>

    <!-- Footer Button -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pt-4 pb-6 px-4 md:px-6"
    >
      <button
        @click="handleContinue"
        class="w-full py-3 md:py-4 px-5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl text-base md:text-lg transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        :disabled="profileStore.userInfo.interests.length === 0"
      >
        Continue
      </button>
    </footer>
  </div>
</template>

<script setup>
const profileStore = useProfileStore();
const auth = useAuthStore();

const selectedOptions = ref([]);

const learningOptions = [
  {
    id: "farming",
    icon: "🌾",
    title: "Modern Farming",
    description:
      "Learn new techniques for better yields and sustainable practices.",
  },
  {
    id: "financial",
    icon: "💰",
    title: "Financial Literacy",
    description:
      "Manage your earnings, save for the future, and access financial tools.",
  },
  {
    id: "mentorship",
    icon: "👥",
    title: "Mentorship",
    description:
      "Connect with experienced farmers and leaders in our community.",
  },
  {
    id: "digital",
    icon: "💻",
    title: "Digital Skills",
    description:
      "Learn to use technology to grow your business and connect with others.",
  },
];

const toggleOption = (id) => {
  const interests = profileStore.userInfo.interests;
  const index = interests.indexOf(id);
  if (index === -1) {
    interests.push(id);
  } else {
    interests.splice(index, 1);
  }
};

const handleContinue = async () => {
  if (profileStore.userInfo.interests.length > 0) {
    await profileStore.updateUserInfoOnServer(auth.user?.id);

    navigateTo("/dashboard");
  }
};
</script>
