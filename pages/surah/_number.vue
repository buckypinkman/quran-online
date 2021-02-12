<template>
  <Skeleton class="mx-auto" v-if="isLoading"/>
  <surah-details :details="details" v-else></surah-details>
</template>

<script>
export default {
  data() {
    return {
      details: [],
      isLoading: false
    }
  },
  async fetch() {
    this.isLoading = true
    try {
      const data = await fetch(
        `https://api.quran.sutanlab.id/surah/${this.$route.params.number}`
      );
      const res = await data.json();
      this.details = res.data;

      this.isLoading = false

      console.log(this.details);
    } catch (error) {
      console.log(error);
    }
  },
}
</script>