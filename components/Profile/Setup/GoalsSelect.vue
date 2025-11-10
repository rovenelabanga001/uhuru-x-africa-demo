<template>
  <div class="flex flex-col gap-4 mt-5 w-full lg:w-full">
    <h2 class="text-xl mt-5 md:text-center">
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
</template>

<script setup>
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

const toggleGoal = (goal) => {
  const index = profileStore.userInfo.goals.indexOf(goal);
  if (index === -1) {
    profileStore.userInfo.goals.push(goal);
  } else {
    profileStore.userInfo.goals.splice(index, 1);
  }
};
</script>
