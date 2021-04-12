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
        :placeholder="`Cari ayat.. cth: ${details.numberOfVerses}`"
        v-model="query"
      />
    </base-header-card>

    <div class="ayat-list mt-6">
      <p
        class="arabic text-center text-4xl mb-5"
        v-if="details.preBismillah"
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
              id="murottal"
              @play="preventDoublePlayAndTriggerNextPlay($event, index)"
            >
              <source :src="res.audio.primary" />
            </audio>
          </client-only>
          <button
            @click="addAyah(res.number.inSurah, details.number)"
            class="ml-auto bookmark focus:outline-none"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="w-10 h-10"
            >
              <path
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </button>
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

    <transition name="slide-fade">
      <img
        src="../../assets/icons/arrow.svg"
        class="w-5 mx-auto sm-arrow cursor-pointer fixed bottom-0 left-0 right-0"
        @click="showBottomNav = !showBottomNav"
        v-if="!showBottomNav"
        alt="arrow icon"
      />

      <div
        class="fixed bottom-0 wrap left-0 right-0 mx-auto z-10"
        v-else-if="showBottomNav"
      >
        <div>
          <img
            src="../../assets/icons/arrow.svg"
            class="w-5 mx-auto mb-3 arrow cursor-pointer"
            @click="showBottomNav = !showBottomNav"
            alt="arrow icon"
          />
        </div>
        <div
          class="page-nav text-center md:text-base py-3 text-sm bg-indigo-400 mx-auto text-white overflow-hidden w-full md:max-w-2xl md:mb-3 md:rounded-md py-2 px-5 dark:bg-gray-800 md:border border-t dark:border-indigo-400 dark:text-gray-300 flex flex-row justify-around"
        >
          <nuxt-link
            class="font-semibold cursor-pointer w-max hover:underline"
            :to="`${details.number - 1}`"
            v-if="details.number > 1"
          >
            &larr; Sebelumnya
          </nuxt-link>
          <div class="ulang-ayat-check">
            <span
              @click="toggleLoop"
              class="font-semibold mx-10 cursor-pointer flex"
            >
              <img
                src="../../assets/icons/repeat.svg"
                class="w-5 md:mr-2"
                alt="repeat icon"
              />
              <p>Ulang Audio <span class="text-xs">{{ isLooping ? '(aktif)' : '(nonaktif)' }}</span></p>
            </span>
          </div>
          <nuxt-link
            class="font-semibold cursor-pointer w-max hover:underline"
            :to="`${details.number + 1}`"
            v-if="details.number < 114"
          >
            Surat selanjutnya &rarr;
          </nuxt-link>
        </div>
      </div>
    </transition>
    <transition name="slide-fade"
      ><success-modal v-if="showModal"
        >Berhasil menambahkan sebagai ayat terakhir dibaca</success-modal
      ></transition
    >
  </div>
</template>

<script>
import audioModule from "../../mixins/audio.js";
import lastReadAyah from "../../mixins/lastReadAyah.js";

export default {
  props: ["details"],
  mixins: [audioModule, lastReadAyah],
  data() {
    return {
      query: "",
      readMore: false,
      showBottomNav: false,
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

.arrow {
  transform: rotate(180deg);
}

.dark-mode audio {
  @apply bg-gray-500;
}

.page-nav {
  margin-bottom: 3.55rem;
}

.sm-arrow {
  margin-bottom: 4.6rem;
}

.bookmark {
  color: #98a7fa;
}


@media only screen and (min-width: 768px) {
  .page-nav {
    margin-bottom: 5rem;
  }
  .sm-arrow {
    margin-bottom: 5.5rem;
  }
}

.dark-mode audio::-webkit-media-controls-play-button,
.dark-mode audio::-webkit-media-controls-panel {
  @apply bg-gray-500;
}
</style>

