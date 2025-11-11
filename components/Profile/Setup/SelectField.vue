<template>
  <div class="flex flex-col gap-3 w-full mt-5 lg:w-full">
    <label
      class="flex flex-col w-full gap-2"
      v-for="info in profileInfo"
      :key="info.id"
    >
      <p class="text-[#333333] text-xl pb-2">{{ info.question }}?</p>
      <select
        v-model="props.userInfo[info.modelKey]"
        class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-xl border-2 border-[#333333]/20 bg-[#FCFDF9] placeholder:text-[#757575] px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        :class="{ 'border-red-500': v$[info.modelKey].$error }"
        @blur="v$[info.modelKey].$touch()"
      >
        <option value="">{{ info.placeholder }}</option>
        <option :value="choice" v-for="choice in info.choices" :key="choice">
          {{ choice }}
        </option>
      </select>
      <small v-if="v$[info.modelKey].$error" class="text-red-500 text-sm">
        {{ v$[info.modelKey].$errors[0].$message }}
      </small>
    </label>
  </div>
</template>

<script setup>
import { profileInfo } from "~/public/profileSetup";

const profileStore = useProfileStore();

const props = defineProps({
  userInfo: {
    type: Object,
    required: true,
  },
  v$: {
    type: Object,
    required: true,
  },
});
</script>
