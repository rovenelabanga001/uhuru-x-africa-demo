<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col gap-3">
      <img src="/images/logo.png" alt="logo" class="rounded-full" />
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-3">uhuruX.africa</h1>
        <p class="text-xl text-gray-500">Unbound Africa</p>
      </div>
    </div>
    <div class="flex flex-col w-full mt-20 gap-3 text-center">
      <button class="secondary-btn font-semibold w-full text-lg rounded-lg">
        Get Started
      </button>
      <p class="text-lg text-[rgb(30,140,110)]">
        Already have an account?
        <span class="underline cursor-pointer">Sign In</span>
      </p>
      <div class="flex w-full flex-row items-center justify-center gap-3 pt-5">
        <div class="h-2 w-2 rounded-full bg-primary"></div>
        <div
          class="h-2 w-2 rounded-full bg-indicator-inactive-light dark:bg-indicator-inactive-dark"
        ></div>
        <div
          class="h-2 w-2 rounded-full bg-indicator-inactive-light dark:bg-indicator-inactive-dark"
        ></div>
      </div>
    </div>
  </div>
</template>
