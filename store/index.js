export const state = () => ({
  favorite_surah: [],
})

export const mutations = {
  addSurah(state, surah) {
    state.favorite_surah.unshift({
      number: surah.number,
      name: surah.name.transliteration.id,
      arabic_name: surah.name.short,
      translated_name: surah.name.translation.id,
      ayat: surah.numberOfVerses,
      revelation: surah.revelation.id,
    });
  },
  deleteSurah(state, index) {
    state.favorite_surah.splice(index, 1)
  },
  getSurah(state, surah) {
    state.favorite_surah = surah
  },
  saveSurah(state) {
    const parsed = JSON.stringify(state.favorite_surah);
    localStorage.setItem("surah", parsed);
  }
}
