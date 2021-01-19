<template>
  <div
    class="bg-white shadow-xl mr-4 pt-4 rounded-md fixed bottom-0 right-0 text-white mb-4 cursor-pointer bg-indigo-400 hover:bg-indigo-500 transition duration-200 text-center"
    @click.prevent="scrollTop"
  >
    <img src="../assets/icons/up-arrow.svg" alt="arrow up" class="m-auto">
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
div {
  width: 3.7rem;
  height: 3.4rem
}

img {
  width: 20px;
}
</style>