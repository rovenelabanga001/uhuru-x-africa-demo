<template>
  <div class="min-h-screen bg-amber-50 px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header with Back Button -->
      <div class="flex items-center justify-center relative mb-12 pt-4">
        <h1 class="text-2xl font-bold text-gray-800">SEVA</h1>
      </div>

      <!-- Progress Indicator -->

      <!-- Main Content -->
      <div class="text-center mb-12 px-4">
        <h2
          class="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
        >
          Check your email
        </h2>
        <p class="text-gray-600 text-base md:text-lg">
          Enter the 6-digit code sent to you at
          <!-- <span class="font-semibold text-gray-800">{{
            auth.user[0].email
          }}</span> -->
        </p>
      </div>

      <!-- OTP Input Fields -->
      <div class="flex justify-center gap-2 md:gap-3 mb-8">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          type="text"
          maxlength="1"
          inputmode="numeric"
          v-model="otpDigits[index]"
          @input="focusNext(index)"
          class="w-12 h-12 text-center text-lg md:text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors bg-white text-gray-800 hover:border-gray-400"
        />
      </div>

      <!-- Verify Button -->
      <button
        @click="verifyOtp"
        class="w-full max-w-md mx-auto block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition-all hover:shadow-lg mb-8"
      >
        Verify
      </button>

      <!-- Help Links -->
      <div class="text-center space-y-3">
        <p class="text-gray-600 text-sm md:text-base">
          Didn't get a code?
          <button
            class="text-green-500 font-semibold hover:text-green-600 transition-colors"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $toast } = useNuxtApp();
const auth = useAuthStore();

const otpDigits = ref(["", "", "", "", "", ""]);

const verifyOtp = () => {
  const otpValue = otpDigits.value.join("");
  auth.verifyOtp(otpValue, $toast);
};

const focusNext = (index) => {
  const nextInput = document.querySelectorAll("input")[index + 1];
  if (nextInput && otpDigits.value[index].length === 1) {
    nextInput.focus();
  }
};
onMounted(() => {
  const remaining = auth.otpExpiresAt - Date.now();
  if (remaining > 0) {
    setTimeout(() => {
      $toast.error("Otp expired. Please Login again");
      auth.logout($toast);
    }, remaining);
  } else {
    auth.logout($toast);
  }
});
</script>
