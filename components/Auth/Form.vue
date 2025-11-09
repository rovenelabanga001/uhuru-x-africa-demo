<template>
  <!-- <client-only> -->
  <form
    @submit.prevent="handleSubmit"
    :class="[
      'flex flex-col justify-center items-center w-full gap-4  h-[70%] md:w-[70%] lg:w-[40%] lg:py-5',
      !isSignUp && ' pt-[50px]',
    ]"
  >
    <!-- Full Name -->
    <div class="flex flex-col items-start gap-2 w-full" v-if="isSignUp">
      <label for="name" class="text-xl font-semibold">Full Name</label>
      <input
        v-model="formData.fullname"
        type="text"
        placeholder="Enter your full name"
        id="name"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:border-0 focus:ring-2 focus:ring-blue/50 border-2 bg-white/50"
        :class="v$?.fullname?.$error ? 'border-red-500' : 'border-[#66BB6A]'"
        @blur="v$.fullname?.$touch()"
      />
      <small v-if="v$?.fullname?.$error" class="text-red-500 text-sm">
        {{ v$.fullname?.$errors[0].$message }}
      </small>
    </div>

    <!-- Email -->
    <div class="flex flex-col items-start gap-1 w-full">
      <label for="email" class="text-xl font-semibold">Email</label>
      <input
        v-model="formData.email"
        type="email"
        placeholder="Enter your email"
        id="email"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:border-0 focus:ring-2 focus:ring-blue/50 border-2 bg-white/50"
        :class="v$?.email?.$error ? 'border-red-500' : 'border-[#66BB6A]'"
        @blur="v$?.email?.$touch()"
      />
      <small v-if="v$?.email?.$error" class="text-red-500 text-sm">
        {{ v$.email?.$errors[0].$message }}
      </small>
    </div>

    <!-- Password -->
    <div class="flex flex-col items-start gap-2 relative w-full">
      <label for="password" class="text-xl font-semibold">Password</label>
      <input
        v-model="formData.password"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Create a password"
        id="password"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:border-0 focus:ring-2 focus:ring-blue/50 border-2 bg-white/50"
        :class="v$?.password?.$error ? 'border-red-500' : 'border-[#66BB6A]'"
        @blur="v$?.password?.$touch()"
      />
      <button
        type="button"
        class="absolute right-3 top-[50px] text-gray-500 hover:text-gray-700"
        @click="showPassword = !showPassword"
      >
        <component
          :is="showPassword ? EyeSlashIcon : EyeIcon"
          class="h-6 w-6"
        />
      </button>
      <small
        v-if="v$?.password?.$error"
        class="text-red-500 text-sm text-start"
      >
        {{ v$.password?.$errors[0].$message }}
      </small>
    </div>

    <!-- Confirm Password -->
    <div
      class="flex flex-col items-start gap-2 relative w-full"
      v-if="isSignUp"
    >
      <label for="confirm-password" class="text-xl font-semibold"
        >Confirm Password</label
      >
      <input
        v-model="formData.confirmPassword"
        :type="showConfirmPassword ? 'text' : 'password'"
        placeholder="Confirm password"
        id="confirm-password"
        class="w-full py-3 px-1 rounded-xl text-xl focus:outline-0 focus:border-0 focus:ring-2 focus:ring-blue/50 border-2 bg-white/50"
        :class="
          v$?.confirmPassword?.$error ? 'border-red-500' : 'border-[#66BB6A]'
        "
        @blur="v$?.confirmPassword?.$touch()"
      />
      <button
        type="button"
        class="absolute right-3 top-[50px] text-gray-500 hover:text-gray-700"
        @click="showConfirmPassword = !showConfirmPassword"
      >
        <component
          :is="showConfirmPassword ? EyeSlashIcon : EyeIcon"
          class="h-6 w-6"
        />
      </button>
      <small v-if="v$?.confirmPassword?.$error" class="text-red-500 text-sm">
        {{ v$.confirmPassword?.$errors[0].$message }}
      </small>
    </div>
    <button
      class="w-full py-3 flex items-center justify-center rounded-xl bg-[#66BB6A] text-white text-xl font-bold hover:bg-opacity-90"
    >
      {{ isSignUp ? "Sign up" : "Sign in" }}
    </button>
    <p :class="['text-xl text-center', !isSignUp && 'mt-[50px] ']">
      {{ isSignUp ? "Already have an account?" : "Don't have an account?" }}
      <span
        @click="navigateTo(isSignUp ? '/auth/signin' : '/auth/signup')"
        class="underline cursor-pointer font-bold text-[#66BB6A]"
        >{{ isSignUp ? "Login" : "Signup" }}</span
      >
    </p>
  </form>
  <!-- </client-only> -->
</template>
<script setup>
import useVuelidate from "@vuelidate/core";
import { helpers, required, sameAs, email } from "@vuelidate/validators";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
import { useAuthStore } from "~/stores/authStore";

const config = useRuntimeConfig();
const { $toast } = useNuxtApp();
const auth = useAuthStore();

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const props = defineProps({
  isSignUp: {
    type: Boolean,
    default: true,
  },
});

const formData = reactive({
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

//custom validators
const twoNames = helpers.withMessage(
  "Full name must contain exactly two names seperated by a space",
  (value) => /^[A-Za-z]+ [A-Za-z]+$/.test(value.trim())
);

const strongPassword = helpers.withMessage(
  "Password must be at least 8 characters long and include a number and a special character",
  (value) => /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(value)
);

//validation rules
const rules = computed(() => ({
  fullname: props.isSignUp ? { required, twoNames } : {},
  email: { required, email },
  password: { required, strongPassword },
  confirmPassword: props.isSignUp
    ? {
        required,
        // pass a function so sameAs reads the current password
        sameAsPassword: helpers.withMessage(
          "Passwords do not match",
          sameAs(computed(() => formData.password))
        ),
      }
    : {},
}));

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  v$.value.$touch();

  if (props.isSignUp) {
    await handleSignup();
  } else {
    await handleLogin();
  }
};
const handleSignup = async () => {
  v$.value.$touch();

  try {
    const existingUser = await $fetch(
      `${config.public.baseUrl}/users?email=${formData.email}`
    );

    if (existingUser.length > 0) {
      $toast.error("An account with this email already exists");
      return;
    }

    const res = await $fetch(`${config.public.baseUrl}/users`, {
      method: "POST",
      body: {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      },
    });

    localStorage.setItem("userEmail", res.email);
    $toast.success("Signup successfull");
    navigateTo("/auth/signin");
  } catch (err) {
    console.error(err);
    $toast.error("Signup failed. Try again later");
  }
};

const handleLogin = async () => {
  await auth.login(formData, $toast);
};
</script>
