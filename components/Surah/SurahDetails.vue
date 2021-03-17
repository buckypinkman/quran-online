<template>
  <div class="surah-detail dark:text-gray-400">
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
        class="w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 rounded transition duration-200 dark:border-indigo-400 dark:bg-gray-700"
        placeholder="Cari ayat.. cth: 200"
        v-model="query"
      />
    </base-header-card>

    <div
      class="ulang-ayat-check fixed bottom-0 left-0 right-0 md:mb-24 mb-20 z-20 ml-3 max-w-md md:mx-auto md:max-w-2xl"
    >
      <p
        @click="enableLoop"
        v-if="!isLooping"
        class="text-lg font-semibold cursor-pointer"
      >
        Klik untuk ulang per ayat
      </p>
      <p
        @click="disableLoop"
        class="text-lg font-semibold cursor-pointer"
        v-else
      >
        Jangan Ulang Audio
      </p>
    </div>
    <div class="ayat-list mt-6">
      <p
        class="arabic text-center text-4xl mb-5"
        v-if="details.preBismillah != null"
      >
        {{ details.preBismillah.text.arab }}
      </p>
      <div
        class="ayat md:px-4 px-2 pt-6 pb-10 border-b border-indigo-200 dark:border-gray-800"
        v-for="(res, index) in filteredAyah"
        :key="res.number.inSurah"
        :id="`ayah-${index + 1}`"
      >
        <div class="wrap flex">
          <p
            class="text-gray-600 bg-white text-sm md:text-base p-2 border border-indigo-300 shadow-lg rounded-md w-max h-10 mt-2 dark:bg-gray-800 dark:border-indigo-400 dark:text-gray-300"
          >
            {{ details.number }}:{{ res.number.inSurah }}
          </p>
          <client-only>
            <audio
              controls="controls"
              controlslist="nodownload"
              class="mb-5 ml-2 shadow-md rounded-md"
              preload="none"
              id="murottal"
              @play="preventDoublePlayAndTriggerNextPlay($event, index)"
            >
              <source :src="res.audio.primary" />
            </audio>
          </client-only>
          <img
            src="../../assets/icons/bookmark-indigo.png"
            alt="bookmark ayat"
            class="h-10 ml-auto cursor-pointer"
            @click="addAyah(res.number.inSurah, details.number)"
          />
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
      <nuxt-link
        class="font-semibold mt-5 cursor-pointer w-max mr-4 hover:underline"
        :to="`${details.number - 1}`"
        v-if="details.number > 1"
      >
        Sebelumnya
      </nuxt-link>
      <nuxt-link
        class="font-semibold mt-5 cursor-pointer w-max hover:underline"
        :to="`${details.number + 1}`"
        v-if="details.number < 114"
      >
        Surat selanjutnya
      </nuxt-link>
      <success-modal v-if="showModal"
        >Berhasil menambahkan sebagai ayat terakhir dibaca</success-modal
      >
    </div>
  </div>
</template>

<script>
import audioModule from '../../mixins/audio.js'
import lastReadAyah from '../../mixins/lastReadAyah.js'

export default {
  props: ["details"],
  mixins: [audioModule, lastReadAyah],
  data() {
    return {
      query: "",
      readMore: false,
    };
  },
  computed: {
    filteredAyah() {
      return this.details.verses.filter((ayah) => {
        return ayah.number.inSurah >= this.query;
      });
    },
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
};
</script>
<style>
audio {
  background-color: rgb(241, 243, 244);
  border: none;
}
audio:focus {
  outline: none;
}

.dark-mode audio {
  @apply bg-gray-500;
}

.dark-mode audio::-webkit-media-controls-play-button,
.dark-mode audio::-webkit-media-controls-panel {
  @apply bg-gray-500;
}
</style>

