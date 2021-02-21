<template>
  <div
    class="bottom-nav text-center bg-indigo-400 text-white overflow-hidden w-full md:max-w-2xl md:mb-3 md:rounded-md py-2 px-5 dark:bg-gray-800 md:border border-t dark:border-indigo-400 dark:text-gray-300 fixed bottom-0 left-0 right-0 mx-auto flex flex-row justify-evenly"
  >
    <nuxt-link to="/">
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
        <img
          src="../assets/icons/bookmark-light.png"
          alt="ayat terakhir dibaca icon"
          class="mx-auto h-6"
        />
        <p class="md:text-base text-xs">Terakhir</p>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.bottom-nav {
  box-shadow: 0 4px 24px 0 rgb(0 0 0 / 10%), 0 4px 20px 0 rgb(0 0 0 / 6%);
}
.star {
  width: 1.4rem;
  margin-bottom: 2px;
}
</style>