<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-md p-6 border border-indigo-200 shadow-lg hover:shadow transition duration-200 dark:text-white dark:border-indigo-400"
  >
    <div class="wrap flex justify-between">
      <p>{{ number }}. {{ name }}</p>
      <img
        src="../../assets/icons/star.svg"
        class="w-6 cursor-pointer"
        alt="add to favorite icon"
      />
    </div>
    <nuxt-link :to="{ name: 'surah-number', params: { number: number } }">
      <p class="text-gray-600 text-sm mt-1 dark:text-gray-500">
        {{ ayat }} Ayat / {{ revelation }}
      </p>
      <div class="flex flex-row-reverse">
        <p class="arabic text-3xl mb-3 text-indigo-700 dark:text-indigo-400">
          {{ arabic_name }}
        </p>
      </div>
      <div class="flex flex-row-reverse">
        <p class="text-gray-600 dark:text-gray-500">{{ translated_name }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    "number",
    "name",
    "arabic_name",
    "translated_name",
    "ayat",
    "revelation",
  ],
  data() {
    return {
      favorite_surah: [],
      new_favorite_surah: null,
    };
  },
  methods: {
    addSurah(surahNumber) {
      this.favorite_surah.push(surahNumber);
      console.log(this.favorite_surah)
    },
    deleteFavSurah(x) {
      this.favorite_surah.splice(x, 1);
      this.saveSurah();
    },
    saveSurah() {
      // favorite_surah diserialisasi menjadi string JSON
      const parsed = JSON.stringify(this.favorite_surah);
      localStorage.setItem('surah', parsed);
    }
  },
};
</script>

<style scoped>
</style>