<template>
  <div class="surah-detail" v-if="details">
    <base-header-card>
      <div class="title sm:flex">
        <h1 class="font-semibold text-xl">
          {{ details.name.transliteration.id }} -
          <span class="arabic font-normal"> {{ details.name.short }} </span>
        </h1>
        <h2 class="font-semibold text-lg ml-1 mb-2 md:mb-0">
          ( <span class="text-base font-normal">arti:</span>
          {{ details.name.translation.id }} )
        </h2>
      </div>

      <p class="text-sm md:text-base mb-2">
        Surat ke: {{ details.number }} / {{ details.revelation.id }} /
        {{ details.numberOfVerses }} Ayat
      </p>

      <p>Penjelasan Surat:</p>
      <p v-if="readMore">{{ details.tafsir.id }}</p>
      <p v-else>{{ details.tafsir.id.slice(0, 140) }}..</p>
      <a
        @click.prevent="readMore = !readMore"
        href="#"
        class="flex flex-row-reverse mt-2 md:mt-0 hover:underline font-semibold"
      >
        {{ readMore ? "Tutup" : "Baca selengkapnya" }}
      </a>
    </base-header-card>

    <base-header-card>
      <input
        type="search"
        class="w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 rounded transition duration-200"
        placeholder="Cari ayat.. cth: 200"
        v-model="query"
      />
    </base-header-card>

    <div class="ayat-list mt-16">
      <p
        class="arabic text-center text-4xl"
        v-if="details.preBismillah != null"
      >
        {{ details.preBismillah.text.arab }}
      </p>
      <div
        class="ayat md:px-4 px-2 pt-5 pb-10 border-b border-indigo-200"
        v-for="res in filteredAyah"
        :key="res.number.inSurah"
      >
        <div class="wrap flex">
          <p
            class="text-gray-600 bg-white text-sm md:text-base p-2 border border-indigo-300 shadow-lg rounded-md w-max h-10 mt-2"
          >
            {{ details.number }}:{{ res.number.inSurah }}
          </p>
          <audio
            controls="controls"
            controlslist="nodownload"
            class="mb-3 ml-2 shadow-md rounded-md"
            preload="none"
          >
            <source :src="res.audio.primary" />
          </audio>
        </div>

        <div
          class="flex flex-row-reverse text-3xl arabic mb-5 leading-loose"
          align="right"
        >
          {{ res.text.arab }}
        </div>
        <p class="text-gray-600">{{ res.translation.id }}</p>
      </div>
    </div>

    <div class="page-nav flex pl-2">
      <p
        class="font-semibold mt-5 cursor-pointer w-max mr-4 hover:underline"
        @click="prevPage"
        v-if="details.number > 1"
      >
        Sebelumnya
      </p>
      <p
        class="font-semibold mt-5 cursor-pointer w-max hover:underline"
        @click="nextPage"
        v-if="details.number < 114"
      >
        Surat selanjutnya
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
  data() {
    return {
      query: "",
      readMore: false,
    };
  },
  head() {
    return {
      title: `${this.details.name.transliteration.id} | Al-Quran Online`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
  methods: {
    // playAudio(url) {
    //   const audio = new Audio(url);
    //   audio.play();
    // },
    nextPage() {
      this.$router.push({
        name: "surah-number",
        params: { number: this.details.number + 1 },
      });  
    },
    prevPage() {
      this.$router.push({
        name: "surah-number",
        params: { number: this.details.number - 1 },
      }); 
    },
  },
  computed: {
    filteredAyah() {
      return this.details.verses.filter((ayah) => {
        return ayah.number.inSurah >= this.query;
      });
    },
  },
};
</script>
<style scoped>
audio {
  background-color: #f1f3f4
}
audio:focus {
  outline: none;
}
</style>

