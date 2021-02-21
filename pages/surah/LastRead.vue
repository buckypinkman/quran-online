<template>
  <div class="last-read md:mt-10 mt-5">
    <h1 class="md:text-4xl text-3xl dark:text-gray-300">
      Ayat terakhir dibaca
    </h1>
    <p>Fitur belum tersedia</p>
    <!-- <div class="ayat-list mt-6">
      <div
        class="ayat md:px-4 px-2 pt-6 pb-10 border-b border-indigo-200 dark:border-gray-800"
        v-for="res in ayah_list"
        :key="res.number.inSurah"
      >
        <div class="wrap flex">
          <p
            class="text-gray-600 bg-white text-sm md:text-base p-2 border border-indigo-300 shadow-lg rounded-md w-max h-10 mt-2 dark:bg-gray-800 dark:border-indigo-400 dark:text-gray-300"
          >
            {{ details.number }}:{{ res.number.inSurah }}
          </p>
          <audio
            controls="controls"
            controlslist="nodownload"
            class="mb-5 ml-2 shadow-md rounded-md"
            preload="none"
          >
            <source :src="res.audio.primary" />
          </audio>
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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      last_read_ayah_number: [],
      ayah_list: [],
    };
  },
  created() {
    this.last_read_ayah_number = JSON.parse(localStorage.getItem("ayah"));
    console.log(this.ayah_list);
  },
  async fetch() {
    const data = await this.last_read_ayah_number.forEach(res => {
      const { surahNumber, ayah } = res
      console.log(res.surahNumber, res.Ayah)
        try {
          const dataAyah = fetch(`https://api.quran.sutanlab.id/surah/${surahNumber}/${ayah}`);
          const res = dataAyah.json();

          console.log(this.surah_list);
       } catch (error) {
        // console.log(error);
      }
    })

    this.ayah_list = data
  },
};
</script>