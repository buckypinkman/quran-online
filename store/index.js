import { addToLocal } from './../utils/index'

export const strict = false

export const state = () => ({
  local_favorite_surah: [],
  showModal: false,
  modal_title: ''
})

export const mutations = {
  addSurah(state, surah) {
    state.local_favorite_surah.unshift({
      number: surah.number,
      name: surah.name.transliteration.id,
      arabic_name: surah.name.short,
      translated_name: surah.name.translation.id,
      ayat: surah.numberOfVerses,
      revelation: surah.revelation.id,
    });
    addToLocal(state.local_favorite_surah, "surah")
    this.commit('toggleModal', 'Berhasil menambahkan sebagai surat favorit')
  },
  deleteSurah(state, index) {
    const id = state.local_favorite_surah.map(item => item.number).indexOf(index)
    state.local_favorite_surah.splice(id, 1)
    addToLocal(state.local_favorite_surah, "surah")
    this.commit('toggleModal', 'Berhasil menghapus surat dari daftar favorit')
  },
  getSurah(state, surah) {
    state.local_favorite_surah = surah
  },
  toggleModal(state, title) {
    state.modal_title = title
    state.showModal = true;
    setTimeout(() => (state.showModal = false), 1800);
  },
}
