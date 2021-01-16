<template>
    <div class="info max-w-md flex justify-between mx-auto bg-blue-100 text-blue-800 font-semibold rounded-md shadow overflow-hidden md:max-w-2xl mt-6 p-6" v-if="showInfo">
      <p >Klik pada teks arab untuk putar audio</p>
      <p @click="showInfo = false" class="cursor-pointer font-bold">x</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showInfo: true
        }
    },
}
</script>