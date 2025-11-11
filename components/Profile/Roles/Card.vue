<template>
  <div
    v-for="role in roleInfo"
    v-if="roleInfo"
    :key="role.id"
    class="mb-5 lg:w-[70%]"
  >
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
      <button
        v-if="profileStore.userInfo.role === role.logoTitle"
        class="bg-green-500 rounded-full p-3 self-center mt-3"
        @click="onBtnClick(role.logoTitle)"
        disabled
      >
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        v-else
        class="bg-[#F2C94C] w-[95%] rounded-lg py-3 self-center mt-3 md:w-[50%] lg:w-[30%]"
        @click="onBtnClick(role.logoTitle)"
      >
        <span class="text-xl font-bold">{{ role.btnTxt }}</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  roleInfo: Array,
  isBreakDown: {
    type: Boolean,
    default: false,
  },
});

const config = useRuntimeConfig();

const auth = useAuthStore();
const profileStore = useProfileStore();
const onBtnClick = inject("onRoleBtnClick");
</script>
