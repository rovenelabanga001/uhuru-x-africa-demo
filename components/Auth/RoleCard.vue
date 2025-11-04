<template>
  <div v-for="role in roleInfo" v-if="roleInfo" :key="role.id">
    <div
      class="flex flex-col items-center justify-center bg-[#EAF0EC] py-8 rounded-lg gap-3"
    >
      <span class="material-symbols-outlined text-[#4A6A51] text-5xl">{{
        role.logo
      }}</span>
      <div class="text-center">
        <p class="text-xl font-medium text-[#4A6A51]">{{ role.logoText }}</p>
        <p class="font-bold text-2xl">{{ role.logoTitle }}</p>
      </div>
    </div>
    <div class="flex flex-col py-8 px-3 gap-3 shadow-xl rounded-lg">
      <p class="text-xl">
        {{ role.text }}
      </p>
      <button class="bg-[#F2C94C] w-[95%] rounded-lg py-3 self-center mt-3">
        <span class="text-xl font-bold">{{ role.btnTxt }}</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  roleInfo: Array,
});
</script>
