<template>
  <div>
    <the-navbar />
    <div class="container mx-auto md:px-6 px-3 mb-24">
      <Nuxt />
      <scroll-top-btn />
      <the-bottom-nav />
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
  background-color: #1a202c;
}

@font-face {
  font-family: QuranFont;
  src: url("../assets/fonts/lpmq.woff");
  font-display: swap;
}

.arabic {
  font-family: QuranFont;
}
</style>