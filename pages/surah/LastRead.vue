<template>
  <div class="last-read md:mt-10 mt-5">
    <h1 class="md:text-4xl text-3xl dark:text-gray-300">
      Ayat terakhir dibaca
    </h1>

    <p v-if="$fetchState.pending">loading..</p>
    <p v-else-if="ayah_list == null" class="text-lg dark:text-gray-400">
      Belum menambahkan ayat terakhir dibaca. Segera membaca!
    </p>
    <ayah-list :ayah="ayah_list" v-else></ayah-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      last_read_ayah: [],
      ayah_list: null,
    };
  },
  created() {
    this.last_read_ayah = JSON.parse(localStorage.getItem("ayah"));
  },
  fetch() {
    this.last_read_ayah.forEach(async (res) => {
      try {
        const resAyah = await fetch(
          `https://api.quran.sutanlab.id/surah/${res.surahNumber}/${res.ayah}`
        );
        const data = await resAyah.json();

        this.ayah_list = data.data;
      } catch (error) {
        // console.log(error);
      }
    });
  },
};
</script>