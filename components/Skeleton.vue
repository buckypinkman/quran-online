<template>
  <div class="skeleton">
    <div class="skeleton mx-auto">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div class="skeleton mx-auto">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div class="skeleton mx-auto">
      <div class="block first_block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.first_block {
  margin-top: 22px;
}
.block {
  width: 100%;
  height: 26px;
  border-radius: 4px;
  margin-bottom: 25.4px;
  animation: loading 1s ease-in-out infinite alternate;
}

@keyframes loading {
  0% {
    transform: scale(1);
    background-color: rgba(156, 167, 184, 0.1);
  }
  50% {
    transform: scale(1.01);
    background-color: rgba(156, 167, 184, 0.3);
  }
  100% {
    transform: scale(1);
    background-color: rgba(156, 167, 184, 0.1);
  }
}
</style>