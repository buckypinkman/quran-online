<template>
  <div class="jadwal-sholat md:mt-10 mt-5 dark:text-gray-400">
    <base-header-card>
    <h1 class="md:text-4xl text-3xl mb-5">Jadwal Sholat</h1>
      <p v-if="list_kota == null">Loading data kota..</p>
      <input
        type="text"
        v-model="keyword"
        placeholder="Ketik disini untuk filter kota"
        class="w-full py-2 px-4 mb-5 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 dark:bg-gray-700 rounded transition duration-200 dark:text-white dark:border-indigo-400"
      />
      <select
        v-model="selected"
        @change="getJadwal"
        class="py-2 px-3 text-gray-800 rounded focus:outline-none border w-full border-indigo-400"
      >
        <option disabled value="">Pilih daerah</option>
        <option v-for="kota in filteredKota" :key="kota.id" :value="kota.id">
          {{ kota.nama }}
        </option>
      </select>
    </base-header-card>

    <div
      class="jadwal flex flex-col flex-col-reverse md:flex-row mt-12"
      v-if="jadwal_sholat"
    >
      <div
        class="jadwal-list dark:text-gray-400 md:w-6/12 border border-indigo-400 rounded-md py-6 px-10 flex justify-between"
      >
        <div class="jadwal-item text-lg font-semibold">
          <p>Imsak</p>
          <p>Shubuh</p>
          <p>Terbit</p>
          <p>Dzuhur</p>
          <p>Ashar</p>
          <p>Maghrib</p>
          <p>Isya</p>
        </div>
        <p v-if="isLoading">Loading data jadwal..</p>
        <div class="jadwal-waktu text-lg" v-else>
          <p>{{ jadwal_sholat.imsak }}</p>
          <p>{{ jadwal_sholat.subuh }}</p>
          <p>{{ jadwal_sholat.terbit }}</p>
          <p>{{ jadwal_sholat.dzuhur }}</p>
          <p>{{ jadwal_sholat.ashar }}</p>
          <p>{{ jadwal_sholat.maghrib }}</p>
          <p>{{ jadwal_sholat.isya }}</p>
        </div>
      </div>

      <div class="jadwal-title md:w-6/12 md:pl-4 mb-4 md:mb-0">
        <h1 class="md:text-3xl text-sm text-gray-500 md:font-semibold dark:text-gray-400">
          Jadwal Sholat untuk daerah {{ kota }} {{ jadwal_sholat.tanggal }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      list_kota: null,
      selected: "",
      jadwal_sholat: null,
      isLoading: false,
      keyword: "",
    };
  },
  methods: {
    async getKota() {
      try {
        const res = await fetch(
          "https://api.banghasan.com/sholat/format/json/kota"
        );
        const data = await res.json();
        this.list_kota = data.kota;
        // console.log(data);
      } catch (err) {
        // console.log(err);
      }
    },
    async getJadwal() {
      this.isLoading = true;
      try {
        const res = await fetch(
          `https://api.banghasan.com/sholat/format/json/jadwal/kota/${this.selected}/tanggal/${this.date}`
        );
        const data = await res.json();
        this.jadwal_sholat = data.jadwal.data;

        this.isLoading = false;
        // console.log(data);
      } catch (err) {
        // console.log(err);
      }
    },
  },
  computed: {
    date() {
      return new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    },
    kota() {
      if (this.list_kota) {
        const kota = this.list_kota.filter((kota) => {
          return this.selected == kota.id;
        });
        return kota.map((kota) => kota.nama).join();
      }
    },
    filteredKota() {
      if (this.list_kota) {
        return this.list_kota.filter((kota) => {
          return kota.nama.toLowerCase().includes(this.keyword.toLowerCase());
        });
      }
    },
  },
  created() {
    this.getKota();
  },
};
</script>