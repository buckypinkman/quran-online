<template>
  <div
    class="shadow-xl mr-4 rounded-md fixed bottom-0 right-0 text-white mb-20 cursor-pointer opacity-75 bg-indigo-400 hover:bg-indigo-500 transition duration-200 text-center dark:bg-indigo-500"
    @click.prevent="scrollTop"
  >
    <img src="../../assets/icons/up-arrow.svg" alt="arrow up" class="m-auto" />
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
  width: 3.3rem;
  height: 3rem;
  padding-top: 0.8rem;
}

@media only screen and (min-width: 600px) {
  div {
    width: 3.7rem;
    height: 3.4rem;
    padding-top: 1rem;
  }
}

img {
  width: 20px;
}
</style>