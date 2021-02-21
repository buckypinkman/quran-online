<template>
  <div class="favorite md:mt-10 mt-5">
    <h1 class="md:text-4xl text-3xl dark:text-gray-300">Surat Favorit</h1>
    <p>Fitur belum tersedia</p>
    <!-- <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" v-if="favSurahNumber">
      <surah-list
        v-for="surah in favSurahNumber"
        :key="surah.number"
        :number="surah.number"
      ></surah-list>
      <p>{{ favorite_surah }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite_surah: null,
      surah_list: [],
    };
  },
  computed: {
    filteredSurah() {
      return this.surah_list.filter((surah) => surah.number == this.favSurahNumber);
    },
    favSurahNumber() {
        return this.favorite_surah.map(res => res)
    }
  },
  created() {
    this.favorite_surah = JSON.parse(localStorage.getItem("surah"));
    console.log(this.favSurahNumber)
  },
  async fetch() {
    try {
      const data = await fetch("https://api.quran.sutanlab.id/surah");
      const res = await data.json();
      this.surah_list = res.data;

      console.log(this.surah_list);
    } catch (error) {
      // console.log(error);
    }
  },
};
</script>