<template>
  <surah-details :details="details"></surah-details>
</template>

<script>
export default {
  data() {
    return {
      details: [],
    }
  },
  async fetch() {
    try {
      const data = await fetch(
        `https://api.quran.sutanlab.id/surah/${this.$route.params.number}`
      );
      const res = await data.json();
      this.details = res.data;

      // console.log(this.details);
    } catch (error) {
      // console.log(error);
    }
  },
}
</script>