<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white border-b border-indigo-200 shadow-sm dark:border-indigo-400">
    <div class="container mx-auto py-4 px-5 flex justify-between">
      <div class="links pt-1 flex">
        <h2 class="font-semibold text-xl md:mr-6 mr-4">Al-Qur'an Online</h2>
        <nuxt-link to="/" class="mt-1">
          <p>Home</p>
        </nuxt-link>
      </div>
      <select
        v-model="$colorMode.preference"
        class="border w-24 bg-transparent h-8 dark:bg-gray-700 rounded pl-2 dark:border-indigo-400 order-last focus:outline-none"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>
