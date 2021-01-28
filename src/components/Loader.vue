<template lang="pug">
  .container
    .loader
      v-icon(x-large) mdi-home-group
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  position: relative;
}

.loader {
  animation: rotate-it 1s linear infinite;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}

@keyframes rotate-it {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
