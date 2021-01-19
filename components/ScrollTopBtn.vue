<template>
  <div
    class="bg-white shadow-xl mr-4 pt-3 rounded-md fixed bottom-0 right-0 text-white mb-4 cursor-pointer bg-indigo-400 hover:bg-indigo-500 transition duration-200 text-center"
    @click.prevent="scrollTop"
  >
    <a class="font-bold text-2xl"> ^ </a>
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
  width: 3.5rem;
  height: 3.8rem
}
</style>