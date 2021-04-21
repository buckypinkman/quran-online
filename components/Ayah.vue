<template>
  <div class="ayat-list md:mt-6 dark:text-gray-400" v-if="ayah">
    <div
      class="ayat md:px-4 px-2 pt-6 pb-10 border-b border-indigo-200 dark:border-gray-800"
    >
      <div class="wrap md:flex">
        <p class="pl-2 md:text-2xl text-xl mb-5 md:mb-0">
          Surat {{ ayah.surahName }} ayat ke
          {{ ayah.number }}
        </p>
        <audio
          controls="controls"
          controlslist="nodownload"
          class="mb-5 ml-2 shadow-md rounded-md md:ml-auto"
          preload="none"
        >
          <source :src="ayah.audio" />
        </audio>
      </div>

      <div
        class="flex flex-row-reverse text-3xl arabic mb-5 leading-loose"
        align="right"
      >
        {{ ayah.arabText }}
      </div>
      <p class="text-gray-600 pb-4">{{ ayah.translation }}</p>
      <nuxt-link
        class="cursor-pointer text-indigo-400 font-semibold md:text-lg"
        :to="{ name: 'surah-number', params: { number: ayah.surahNumber }, hash: `#ayah-${ayah.number}` }"
        >Lanjut baca</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["ayah"],
};
</script>
