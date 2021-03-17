<template>
<transition name="fade">
  <div
    class="bg-white dark:bg-gray-800 rounded-md p-6 border border-indigo-200 shadow-lg hover:shadow transition duration-200 dark:text-white dark:border-indigo-400"
  >
    <div class="wrap flex justify-between">
      <p>{{ number }}. {{ name }}</p>
      <img
        src="../../assets/icons/trash.svg"
        class="w-6 cursor-pointer"
        alt="delete icon"
        @click="deleteSurah(id, $event)"
        v-if="favorite == true"
      />
      <img
        src="../../assets/icons/star.svg"
        class="w-6 cursor-pointer"
        alt="add to favorite icon"
        @click="addSurah()"
        v-else
      />
    </div>
    <nuxt-link :to="{ name: 'surah-number', params: { number: number } }">
      <p class="text-gray-600 text-sm mt-1 dark:text-gray-500">
        {{ ayat }} Ayat / {{ revelation }}
      </p>
      <div class="flex flex-row-reverse">
        <p class="arabic text-3xl mb-3 text-indigo-700 dark:text-indigo-400">
          {{ arabic_name }}
        </p>
      </div>
      <div class="flex flex-row-reverse">
        <p class="text-gray-600 dark:text-gray-500">{{ translated_name }}</p>
      </div>
    </nuxt-link>
  </div>
</transition>
</template>

<script>
export default {
  props: [
    "id",
    "number",
    "name",
    "arabic_name",
    "translated_name",
    "ayat",
    "revelation",
    "favorite"
  ],
  methods: {
    addSurah() {
      this.$emit('addedSurah')
    },
    deleteSurah(id, e) {
      this.$emit('surahDeleted', id, e)
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>