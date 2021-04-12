<template>
  <div class="favorite md:mt-10 mt-5">
    <h1 class="md:text-4xl text-3xl dark:text-gray-300">Surat Favorit</h1>
    <p
      v-if="$store.state.local_favorite_surah.length == 0"
      class="text-lg dark:text-gray-400"
    >
      Belum ada surat favorit. Segera tambahkan!
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" v-else>
      <surah-list
        v-for="(surah, index) in $store.state.local_favorite_surah"
        :key="surah.number"
        :id="index"
        :number="surah.number"
        :name="surah.name"
        :arabic_name="surah.arabic_name"
        :translated_name="surah.translated_name"
        :ayat="surah.ayat"
        :revelation="surah.revelation"
        :favorite="true"
        @surahDeleted="deleteSurah"
      ></surah-list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteSurah(num) {
      this.$store.commit("deleteSurah", num);
    },
  },
  mounted() {
    const surah = JSON.parse(window.localStorage.getItem("surah"));
    this.$store.commit("getSurah", surah);
    // this.favorite_surah = JSON.parse(localStorage.getItem("surah"))
  },
};
</script>