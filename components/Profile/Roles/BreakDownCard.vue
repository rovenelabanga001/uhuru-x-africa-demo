<template>
  <div
    v-for="role in roleTxt"
    :key="role.id"
    class="bg-white rounded-lg border-2 border-green-100 p-8 hover:border-green-400 transition relative"
  >
    <div class="flex items-center gap-4 mb-6">
      <div
        class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"
      >
        <span class="material-symbols-outlined text-[#4A6A51] text-5xl">{{
          role.logo
        }}</span>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-green-900">{{ role.logoText }}</h2>
        <p class="text-green-700 font-semibold">{{ role.logoTitle }}</p>
      </div>
    </div>

    <p class="text-gray-700 mb-6 leading-relaxed">
      {{ role.text }}
    </p>

    <div class="space-y-4 mb-8">
      <div class="flex gap-3" v-for="des in role.descriptions" :key="des.id">
        <div
          class="w-6 h-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center"
        >
          <svg
            class="w-4 h-4 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="text-gray-700"
          ><strong>{{ des.title }}:</strong> {{ des.info }}</span
        >
      </div>
    </div>

    <!-- <button
      class="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
    >
      Choose {{ role.logoTitle }}
    </button> -->
    <button
      v-if="profileStore.userInfo.role === role.logoTitle"
      class="bg-green-500 rounded-full p-3 self-center mt-3 absolute bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-500 md:bottom-6"
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
      class="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-500"
      @click="onBtnClick(role.logoTitle)"
    >
      <span class="text-xl font-bold">{{ role.btnTxt }}</span>
    </button>
  </div>
</template>
<script setup>
import { roleTxt } from "~/public/role-buttons";
const auth = useAuthStore();

const profileStore = useProfileStore();
const onBtnClick = inject("onRoleBtnClick");
</script>
