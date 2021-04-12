<template>
  <div
    class="bottom-nav text-center bg-indigo-400 text-white overflow-hidden w-full md:max-w-2xl md:mb-3 md:rounded-md py-2 px-5 dark:bg-gray-800 dark:text-gray-300 fixed bottom-0 left-0 right-0 mx-auto flex flex-row justify-around"
  >
    <nuxt-link to="/" exact>
      <div class="nav-item cursor-pointer">
        <img src="../assets/icons/home.svg" alt="home icon" class="mx-auto" />
        <p class="md:text-base text-xs">Home</p>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'surah-favorite' }">
      <div class="nav-item cursor-pointer">
        <img
          src="../assets/icons/star (1).svg"
          alt="favorite icon"
          class="mx-auto star"
        />
        <p class="md:text-base text-xs">Favorit</p>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'surah-LastRead' }">
      <div class="nav-item cursor-pointer">
        <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-auto"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        <p class="md:text-base text-xs">Terakhir</p>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'jadwal-sholat' }">
      <div class="nav-item cursor-pointer">
        <img
          src="../assets/icons/muslim-prayer.svg"
          alt="ayat terakhir dibaca icon"
          class="mx-auto h-6"
        />
        <p class="md:text-base text-xs">Jadwal</p>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
a {
  opacity: .7;
}

a.nuxt-link-active {
  opacity: 1;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
   opacity: 1;
}

.bottom-nav {
  box-shadow: 0 4px 24px 0 rgb(0 0 0 / 10%), 0 4px 20px 0 rgb(0 0 0 / 6%);
}

.star {
  width: 1.4rem;
  margin-bottom: 2px;
}
</style>