<template>
  <div
    class="bg-white shadow-xl py-2 px-4 mr-4 rounded-md fixed bottom-0 right-0 text-white mb-4 cursor-pointer bg-indigo-400 hover:bg-indigo-500 transition duration-200"
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