<template>
  <form
    :class="[
      'flex flex-col justify-center items-center w-full gap-4  h-[70%] md:w-[70%] lg:w-[40%] lg:py-5',
      !isSignUp && ' pt-[50px]',
    ]"
  >
    <div class="flex flex-col items-start gap-2 w-full" v-if="isSignUp">
      <label for="name" class="text-xl font-semibold">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        id="name"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:ring-2 focus:ring-[#A2D4AB]/50 border-2 border-[#E0E0E0] dark:border-[#3F3F3F]/20 bg-white/50"
      />
    </div>
    <div class="flex flex-col items-start gap-2 w-full">
      <label for="email" class="text-xl font-semibold">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        id="email"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:ring-2 focus:ring-[#A2D4AB]/50 border-2 border-[#E0E0E0] dark:border-[#3F3F3F]/20 bg-white/50"
      />
    </div>
    <div class="flex flex-col items-start gap-2 w-full">
      <label for="password" class="text-xl font-semibold">Password</label>
      <input
        type="password"
        placeholder="Create a password"
        id="password"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:ring-2 focus:ring-[#A2D4AB]/50 border-2 border-[#E0E0E0] dark:border-[#3F3F3F]/20 bg-white/50"
      />
    </div>
    <div class="flex flex-col items-start gap-2 w-full" v-if="isSignUp">
      <label for="confirm-password" class="text-xl font-semibold"
        >Confirm Password</label
      >
      <input
        type="password"
        placeholder="Confirm password"
        id="confirm-password"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:ring-2 focus:ring-[#A2D4AB]/50 border-2 border-[#E0E0E0] dark:border-[#3F3F3F]/20 bg-white/50"
      />
    </div>
    <button
      class="w-full py-3 flex items-center justify-center rounded-xl bg-[#A2D4AB] text-[#3F3F3F] text-xl font-bold hover:bg-opacity-90"
    >
      {{ isSignUp ? "Sign up" : "Sign in" }}
    </button>
    <p :class="['text-xl text-center', !isSignUp && 'mt-[50px] ']">
      {{ isSignUp ? "Already have an account?" : "Don't have an account?" }}
      <span
        @click="navigateTo(isSignUp ? '/auth/signin' : '/auth/signup')"
        class="underline cursor-pointer font-bold text-[#A2D4AB]"
        >{{ isSignUp ? "Login" : "Signup" }}</span
      >
    </p>
  </form>
</template>
<script setup>
const props = defineProps({
  isSignUp: {
    type: Boolean,
    default: true,
  },
});
</script>
