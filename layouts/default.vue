<template>
  <div>
    <the-navbar />
    <div class="container mx-auto md:px-6 px-3 mb-10">
      <Nuxt />
      <scroll-top-btn />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: rgb(248, 251, 255);
}

.dark-mode body {
  background-color: #1A202C;
}

@font-face {
  font-family: QuranFont;
  src: url("../assets/fonts/me_quran_volt_newmet.ttf");
  font-display: swap;
}

.arabic {
  font-family: QuranFont;
}
</style>