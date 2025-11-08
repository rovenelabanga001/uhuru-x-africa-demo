<template>
  <div class="page w-full min-h-screen flex flex-col gap-5 lg:gap-3">
    <div class="flex justify-start items-center gap-7 md:justify-center">
      <span class="material-symbols-outlined text-[#4A6A51] text-3xl"
        >agriculture</span
      >
      <h2 class="font-bold text-xl">Welcome! How can we help?</h2>
    </div>
    <h2 class="text-start font-bold text-3xl mt-3 lg:text-center">
      Which best describes you?
    </h2>
    <div class="flex flex-col items-center gap-[20px]">
      <ProfileRolesCard :role-info="roleTxt" />
    </div>

    <p
      class="text-brand-green underline text-center cursor-pointer lg:mt-[20px]"
    >
      <NuxtLink to="/profile/roles/breakdown">
        I am not sure help me choose</NuxtLink
      >
    </p>
  </div>
</template>

<script setup>
import { roleTxt } from "~/public/role-buttons";
</script>
