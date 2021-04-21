<template>
  <div class="quran-app">
    <base-header-card>
      <input
        type="search"
        class="w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 dark:bg-gray-700 rounded transition duration-200 dark:text-white dark:border-indigo-400"
        placeholder="Cari Surah.. cth: ar-rahman"
        v-model="keyword"
      />
    </base-header-card>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Surah
        v-for="surah in filteredSurah"
        :key="surah.number"
        :number="surah.number"
        :name="surah.name.transliteration.id"
        :arabic_name="surah.name.short"
        :translated_name="surah.name.translation.id"
        :ayat="surah.numberOfVerses"
        :revelation="surah.revelation.id"
        @addedSurah="addSurah(surah)"
      ></Surah>
    </div>
    <transition name="slide-fade">
      <success-modal v-if="$store.state.showModal"
        />
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: 'fade',
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
  methods: {
    addSurah(surah) {
      this.$store.commit("addSurah", surah);
    },
  },
  async fetch() {
    try {
      const data = await fetch("https://api.quran.sutanlab.id/surah");
      const res = await data.json();
      this.surah_list = res.data;

      // console.log(this.surah_list);
    } catch (error) {
      // console.log(error);
    }
  },
  mounted() {
    //get the local favorite surah in mounted lifecycle if SSR is active
    const surah = JSON.parse(window.localStorage.getItem("surah"));
    this.$store.commit("getSurah", surah);
    // this.favorite_surah = JSON.parse(localStorage.getItem("surah"))
  },
};
</script>