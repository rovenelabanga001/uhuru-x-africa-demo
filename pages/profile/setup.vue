<template>
  <div
    class="page w-full min-h-screen bg-[#FCFDF9] flex flex-col items-center justify-center gap-6 md:px-20"
  >
    <div class="mb-10 flex w-full justify-center">
      <div class="flex items-center gap-3">
        <div class="h-2 w-8 rounded-full bg-[#f0e68c]"></div>
        <div class="h-2 w-8 rounded-full bg-[#A8D5BA]"></div>
        <div class="h-2 w-8 rounded-full bg-[#F6FF33]"></div>
      </div>
    </div>
    <div class="text-start md:text-center">
      <h2 class="text-4xl font-bold mb-3">Welcome, User!</h2>
      <p class="text-xl text-gray-500">
        Let's set up your profile to get started.
      </p>
    </div>
    <div class="flex flex-col gap-6 w-full lg:w-[80%]">
      <label
        class="flex flex-col w-full gap-2"
        v-for="info in profileInfo"
        :key="info.id"
      >
        <p class="text-[#333333] text-xl pb-2">{{ info.question }}?</p>
        <select
          class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-xl border-2 border-[#333333]/20 bg-[#FCFDF9] placeholder:text-[#757575] px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        >
          <option value="">{{ info.placeholder }}</option>
          <option :value="choice" v-for="choice in info.choices" :key="choice">
            {{ choice }}
          </option>
        </select>
      </label>
    </div>
    <div class="flex flex-col gap-4 w-full lg:w-[80%]">
      <h2 class="text-xl md:text-center">
        What do you hope to achieve with SEVA?
      </h2>
      <p class="text-sm text-gray-500 md:text-center">
        Select one or more options
      </p>
      <div class="grid grid-cols-2 gap-4 place-items-center lg:grid-cols-4">
        <div
          class="flex flex-col items-center justify-center cursor-pointer gap-3 rounded-2xl border-2 border-transparent bg-[#FEFFD2]/40 p-4 text-center ring-2 ring-transparent transition-all hover:bg-[#FEFFD2]/60 focus:outline-none focus:ring-[#A8D5BA] md:h-[250px] md:w-[250px]"
          v-for="option in options"
          :key="option.id"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-[#A8D5BA]/20 text-[#A8D5BA]"
          >
            <span
              class="material-symbols-outlined text-3xl"
              :data-icon="option.dataIcon"
              >{{ option.icon }}</span
            >
          </div>
          <p class="text-[#333333] text-sm">{{ option.text }}</p>
        </div>
      </div>
    </div>
    <button
      class="w-full flex flex-col items-center justify-center font-bold text-xl rounded-3xl bg-[#A8D5BA] py-3 shadow-sm hover:scale-[1.02] active:scale-[0.98] md:w-[50%]"
    >
      Continue
    </button>
    <p class="text-sm text-gray-500 text-center cursor-pointer">
      I'll do this later
    </p>
  </div>
</template>

<script setup>
import { profileInfo } from "~/public/profileSetup";

const options = reactive([
  {
    id: 1,
    dataIcon: "leaf",
    icon: "eco",
    text: "Increase crop yield",
  },
  {
    id: 2,
    dataIcon: "storefront",
    icon: "storefront",
    text: "Find new markets",
  },
  {
    id: 3,
    dataIcon: "school",
    icon: "school",
    text: "Learn new skills",
  },
  {
    id: 1,
    dataIcon: "groups",
    icon: "groups",
    text: "Community connection",
  },
]);

const selectedOption = ref(false);
</script>
