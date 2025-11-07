<template>
  <client-only>
    <div
      class="page w-full min-h-screen bg-[#FCFDF9] flex flex-col items-center justify-center gap-6 md:px-20"
    >
      <form action="" @submit.prevent="handleSubmit">
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
        <div class="flex flex-col gap-3 w-full lg:w-[80%]">
          <label
            class="flex flex-col w-full gap-2"
            v-for="info in profileInfo"
            :key="info.id"
          >
            <p class="text-[#333333] text-xl pb-2">{{ info.question }}?</p>
            <select
              v-model="userInfo[info.modelKey]"
              class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-xl border-2 border-[#333333]/20 bg-[#FCFDF9] placeholder:text-[#757575] px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              :class="{ 'border-red-500': v$[info.modelKey].$error }"
              @blur="v$[info.modelKey].$touch()"
            >
              <option value="">{{ info.placeholder }}</option>
              <option
                :value="choice"
                v-for="choice in info.choices"
                :key="choice"
              >
                {{ choice }}
              </option>
            </select>
            <small v-if="v$[info.modelKey].$error" class="text-red-500 text-sm">
              {{ v$[info.modelKey].$errors[0].$message }}
            </small>
          </label>
        </div>
        <div class="flex flex-col gap-4 mt-5 w-full lg:w-[80%]">
          <h2 class="text-xl md:text-center">
            What do you hope to achieve with SEVA?
          </h2>
          <p class="text-sm text-gray-500 md:text-center">
            Select one or more options
          </p>
          <div
            class="grid grid-cols-2 gap-4 place-items-center w-full lg:grid-cols-2"
          >
            <div
              v-for="option in options"
              :key="option.id"
              @click="toggleGoal(option.text)"
              :class="[
                'flex flex-col items-center justify-center cursor-pointer gap-3 rounded-2xl border-2 p-4 text-center transition-all h-[150px] w-[150px] md:h-[150px] md:w-[250px]',
                userInfo.goals.includes(option.text)
                  ? 'border-[#A8D5BA] bg-[#A8D5BA]/20'
                  : 'border-transparent bg-[#FEFFD2]/40 hover:border-[#A8D5BA]',
              ]"
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
          <small v-if="v$.goals.$error" class="text-red-500 text-sm text-start">
            {{ v$.goals.$errors[0].$message }}
          </small>
        </div>
        <button
          type="submit"
          class="w-full flex flex-col items-center justify-center font-bold text-xl rounded-3xl bg-[#A8D5BA] mt-5 py-3 shadow-sm hover:scale-[1.02] active:scale-[0.98] md:w-[50%]"
        >
          Continue
        </button>
        <p class="text-sm text-gray-500 text-center cursor-pointer mt-3">
          I'll do this later
        </p>
      </form>
    </div>
  </client-only>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
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

const userInfo = reactive({
  religion: "",
  language: "",
  age_range: "",
  gender: "",
  employment_status: "",
  goals: [],
});

const rules = computed(() => ({
  religion: { required },
  language: { required },
  age_range: { required },
  gender: { required },
  employment_status: { required },
  goals: {
    required: helpers.withMessage(
      "Please select at least one goal",
      (value) => Array.isArray(value) && value.length > 0
    ),
  },
}));

const v$ = useVuelidate(rules, userInfo);

const toggleGoal = (goal) => {
  const index = userInfo.goals.indexOf(goal);
  if (index === -1) {
    userInfo.goals.push(goal);
  } else {
    userInfo.goals.splice(index, 1);
  }
};

async function handleSubmit() {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    console.log("✅ Form submitted:", JSON.stringify(userInfo, null, 2));
  } else {
    console.warn("❌ Validation failed");
  }
}
</script>
