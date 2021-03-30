<template>
  <nav
    class="flex w-full items-center justify-between top-0 dark:bg-gray-900 px-6 h-16 bg-white text-gray-700 border-b border-gray-200 dark:border-gray-700 z-10"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex items-center">
      <h1 class="dark:text-gray-400 text-lg font-semibold">Al-Qur'an Online</h1>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white dark:bg-gray-800 dark:text-gray-300 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b dark:border-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-arrow-left cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </span>
      <nuxt-link to="/">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 cursor-pointer"
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
          <span>Home</span></span
        >
      </nuxt-link>
      <nuxt-link to="/about">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 cursor-pointer"
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </span>
          <span>Tentang</span></span
        >
      </nuxt-link>

      <a href="https://github.com/buckypinkman/quran-online" target="_blank">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 cursor-pointer"
          ><span class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-code-slash h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </span>
          <span>Source Code</span></span
        >
      </a>
      <div class="fixed bottom-0 w-full">
        <label for="theme" class="ml-3">Tema</label>
        <select
          v-model="$colorMode.preference"
          class="border w-24 bg-transparent mb-3 h-8 dark:bg-gray-700 rounded pl-2 dark:border-indigo-400 order-last focus:outline-none"
          id="theme"
        >
          <option value="" disabled>Tema</option>
          <option value="light">Cerah</option>
          <option value="dark">Gelap</option>
        </select>
        <a
          rel="noopener"
          class="flex items-center p-4 bg-indigo-600 text-white"
          href="https://trakteer.id/bucky"
          target="_blank"
        >
          <img
            class="mr-3 h-8 w-auto"
            src="../assets/icons/coffee-cup.svg"
            alt="Buy Me Coffee"
          />
          <p>
            <span class="font-bold">Buy me a Coffee</span>
            <br />
            <span class="text-sm text-white">Support the developer</span>
          </p>
        </a>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style scoped>
.h-custom {
  height: 3.6rem;
}
</style>