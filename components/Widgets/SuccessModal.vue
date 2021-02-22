<template>
  <transition name="fade">
    <div
      class="sucess-modal px-4 py-3 text-sm md:text-base font-semibold fixed bottom-0 md:mb-24 mb-20 bg-green-300 dark:bg-green-400 rounded-md shadow-lg text-white"
      v-if="showModal"
    >
      <p>Sukses menambahkan sebagai ayat terakhir dibaca</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["showModal"],
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>