import {
  addToLocal
} from './../utils/index'

export default {
  data() {
    return {
      last_read_ayah: [],
    }
  },
  methods: {
    addAyah(ayah) {
      if (this.last_read_ayah) {
        this.last_read_ayah.splice(0, 1)
      }
      this.last_read_ayah.unshift(ayah);
      addToLocal(this.last_read_ayah, "ayah")
      this.$store.commit('toggleModal', 'Berhasil menambahkan ayat terakhir dibaca');
    },
  },
}
