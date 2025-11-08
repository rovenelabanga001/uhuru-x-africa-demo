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
        <ProfileSetupSelectField :userInfo="userInfo" :v$="v$" />
        <ProfileSetupGoalsSelect :userInfo="userInfo" :v$="v$" />
        <div class="flex justify-center w-full mt-5">
          <button
            type="submit"
            class="font-bold text-xl rounded-3xl bg-[#A8D5BA] py-3 px-8 shadow-sm hover:scale-[1.02] active:scale-[0.98] md:w-[50%]"
          >
            Continue
          </button>
        </div>

        <p
          @click="navigateTo('/dashboard', { replace: true })"
          class="text-sm text-gray-500 text-center cursor-pointer mt-3"
        >
          I'll do this later
        </p>
      </form>
    </div>
  </client-only>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

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
    navigateTo("/profile/roles", { replace: true });
  } else {
    console.warn("❌ Validation failed");
  }
}
</script>
