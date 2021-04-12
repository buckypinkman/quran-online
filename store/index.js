export const state = () => ({
  local_favorite_surah: []
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
  },
  deleteSurah(state, index) {
    state.local_favorite_surah.splice(index, 1)
    this.commit('saveSurah')
  },
  getSurah(state, surah) {
    state.local_favorite_surah = surah
  },
  saveSurah(state) {
    const parsed = JSON.stringify(state.local_favorite_surah);
    window.localStorage.setItem("surah", parsed);
  }
}
