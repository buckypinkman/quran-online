<template>
  <div>
    <the-navbar />
    <div class="container mx-auto md:px-6 px-3 mb-24 mt-10">
      <Nuxt />
      <scroll-top-btn/>
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(15px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>