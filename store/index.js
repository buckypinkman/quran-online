import { addToLocal } from './../utils/index'

export const strict = false

export const state = () => ({
  local_favorite_surah: [],
  showModal: false,
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
    this.commit('toggleModal')
  },
  deleteSurah(state, index) {
    state.local_favorite_surah.splice(index, 1)
    addToLocal(state.local_favorite_surah, "surah")
  },
  getSurah(state, surah) {
    state.local_favorite_surah = surah
  },
  toggleModal(state) {
    state.showModal = true;
    setTimeout(() => (state.showModal = false), 1800);
  },
}
