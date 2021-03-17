export default {
  data() {
    return {
      last_read_ayah: [],
      showModal: false,
    }
  },
  methods: {
    addAyah(ayah, surahNumber) {
      this.last_read_ayah.push({
        ayah: ayah,
        surahNumber: surahNumber
      });
      this.saveAyah();
      this.toggleModal();
    },
    toggleModal() {
      this.showModal = true;
      setTimeout(() => (this.showModal = false), 1800);
    },
    saveAyah() {
      const parsed = JSON.stringify(this.last_read_ayah);
      localStorage.setItem("ayah", parsed);
    },
  },
  created() {
    let lastAyahQuery = this.$route.query.ayah_last;
    if (lastAyahQuery) {
      this.query = lastAyahQuery;
    }
  },
}
