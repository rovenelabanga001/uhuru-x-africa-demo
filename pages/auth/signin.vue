<template>
  <div
    class="w-full min-h-screen flex flex-col items-center text-center gap-5 pt-10 px-5 bg-[#FEF9E4]"
  >
    <div class="flex justify-center items-center gap-3">
      <svg
        fill="none"
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM22 34H18V22H22V34ZM30 34H26V14H30V34Z"
          fill="#A2D4AB"
        ></path>
      </svg>
      <h2 class="text-2xl font-bold">SEVA</h2>
    </div>
    <h2 class="text-4xl font-bold">Access Your Account</h2>
    <p class="text-xl text-gray-500 mt-3">Enter your credentials</p>
    <AuthForm :isSignUp="false" />
  </div>
</template>
