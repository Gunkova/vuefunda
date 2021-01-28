<template lang="pug">
  header.header
    a.logo(:href="logoSrc")
      img(:src="logoImg")
</template>

<script>
export default {
  name: "Header",
  props: {
    logoImg: {
      type: String,
      required: true
    },
    logoSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: var(--v-accent-base);
  padding: 20px;
}

.logo {
  width: 100px;
  display: block;

  img {
    width: 100%;
    display: block;
  }
}
</style>
