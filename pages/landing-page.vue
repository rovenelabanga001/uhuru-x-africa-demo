<template>
  <div
    class="w-full min-h-screen bg-[#F7F9F7] flex flex-col justify-center items-center gap-7 p-10"
  >
    <span
      @click="navigateTo('/auth/signin')"
      class="self-end text-gray-500 font-semibold text-xl cursor-pointer lg:mr-10"
      >Skip</span
    >
    <h2 class="text-center font-black text-6xl text-[#66BB6A]">SEVA</h2>
    <div
      class="bg-white shadow-xl rounded-3xl p-7 flex flex-col gap-3 md:text-center md:p-8 lg:w-[70%]"
    >
      <h2 class="text-xl font-bold text-[#66BB6A]">Welcome to SEVA</h2>
      <p class="text-xl font-bold">
        Empowering the next generation of rural farmers.
      </p>
      <p class="text-xl text-gray-500 mt-3">
        SEVA is a learning and growth space within UhuruX.africa designed for
        budding farmers and adults starting their journey toward financial
        independence.
      </p>
    </div>
    <h2 class="text-center text-2xl font-bold">Through SEVA, you'll:</h2>
    <div class="flex flex-col items-center justify-center w-full lg:w-[70%]">
      <div
        class="flex items-center gap-3 p-5 rounded-2xl w-full h-[100px] mt-4 md:justify-center md:rounded-3xl"
        :class="info.bg"
        v-for="info in appInfo"
        :key="info.id"
      >
        <span class="mt-0.5 mr-3 text-xl">{{ info.icon }}</span>
        <p class="text-lg">{{ info.text }}</p>
      </div>
    </div>
    <div class="text-center text-lg text-[#6c757d] md:w-[70%] md:self-center">
      <p>
        This one-year guided program combines practical fieldwork with simple
        digital lessons — helping you build skills, savings habits, and
        community connections before accessing larger financial tools.
      </p>
      <p class="mt-4 font-semibold text-[#1A202C]">
        SEVA is where your farming journey begins — learning, growing, and
        thriving together.
      </p>
    </div>
    <footer class="w-full pb-12 pt-6 lg:w-[70%]">
      <div class="flex flex-col items-center gap-4 text-center w-full">
        <button
          @click="navigateTo('/auth/signup')"
          class="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-[#66BB6A] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#66BB6A]/90 lg:w-[50%]"
        >
          <span class="truncate">Sign Up</span>
        </button>
        <p class="text-lg text-[#6c757d]">
          Already have an account?
          <span
            class="font-bold text-[#66BB6A] hover:underline cursor-pointer"
            @click="navigateTo('/auth/signin')"
            >Log In</span
          >
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup>
const appInfo = reactive([
  {
    id: "1",
    icon: "🌾",
    text: "Learn modern and sustainable farming practices",
    bg: "bg-[#66BB6A]/10",
  },
  {
    id: "2",
    icon: "💡",
    text: "Build financial and digital literacy.",
    bg: "bg-[#FFEE58]/20",
  },
  {
    id: "3",
    icon: "🤝",
    text: "Connect with mentors, cooperatives, and local partners.",
    bg: "bg-[#66BB6A]/10",
  },
  {
    id: "4",
    icon: "🌍",
    text: "Grow your confidence and earn your place in the UhuruX ecosystem.",
    bg: "bg-[#FFEE58]/20",
  },
]);
</script>
