<template>
  <div class="last-read md:mt-10 mt-5">
    <h1 class="md:text-4xl text-3xl dark:text-gray-300">
      Ayat terakhir dibaca
    </h1>

    <p
      v-if="!last_read_ayah"
      class="text-lg dark:text-gray-400"
    >
      Belum ada ayat terakhir dibaca. Segera tambahkan!
    </p>
    <Ayah :ayah="last_read_ayah[0]" v-else></Ayah>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      last_read_ayah: [],
    };
  },
  mounted() {
    this.last_read_ayah = JSON.parse(window.localStorage.getItem("ayah"));
  },
};
</script>