<template>
  <div class="quran-app">
    <base-header-card>
      <input
        type="search"
        class="w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 rounded transition duration-200"
        placeholder="Cari Surah.. cth: ar-rahman"
        v-model="keyword"
      />
    </base-header-card>
    <Skeleton v-if="$fetchState.pending" class="mx-auto"/>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" v-else>
      <surah-list
        v-for="surah in filteredSurah"
        :key="surah.number"
        :number="surah.number"
        :name="surah.name.transliteration.id"
        :arabic_name="surah.name.short"
        :translated_name="surah.name.translation.id"
        :ayat="surah.numberOfVerses"
        :revelation="surah.revelation.id"
      ></surah-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      surah_list: [],
      keyword: "",
    };
  },
  computed: {
    filteredSurah() {
      return this.surah_list.filter((surah) => {
        return surah.name.transliteration.id
          .toLowerCase()
          .includes(this.keyword.toLowerCase());
      });
    },
  },
  async fetch() {
    try {
      const data = await fetch("https://api.quran.sutanlab.id/surah");
      const res = await data.json();
      this.surah_list = res.data;

      console.log(this.surah_list);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>