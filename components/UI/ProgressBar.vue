<template>
  <div class="flex items-center justify-center gap-2 mb-16 px-4 w-full">
    <!-- Step 1: Account -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
      >
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p class="text-xs font-semibold text-green-500">Demographics</p>
    </div>

    <!-- Line 1 -->
    <div class="flex-grow h-1 bg-green-500 mx-1 md:mx-2 mb-8"></div>

    <!-- Step 2: Verify -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-gray-800"
      >
        2
      </div>
      <p class="text-xs font-semibold text-gray-800">Role</p>
    </div>

    <!-- Line 2 -->
    <div class="flex-grow h-1 bg-gray-300 mx-1 md:mx-2 mb-8"></div>

    <!-- Step 3: Profile -->
    <div class="flex flex-col items-center gap-2">
      <div
        class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-400"
      >
        3
      </div>
      <p class="text-xs font-semibold text-gray-400">Interests</p>
    </div>
  </div>
</template>
