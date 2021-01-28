<template lang="pug">
  .description(v-bind:class="hidden && 'hidden'") 
    h2.h2 Description
    p {{ text }}
    .description-nav(v-on:click="clickHandler")
        v-icon mdi-chevron-double-up
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      hidden: true
    };
  },
  props: {
    text: {
      type: String,
      required: false
    }
  },
  methods: {
    //   show and hide description
    clickHandler() {
      this.hidden = !this.hidden;
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 40px;
  padding-bottom: 30px;
  overflow: hidden;
  position: relative;

  &.hidden {
    max-height: 300px;
    .description-nav {
      background: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(255, 255, 255, 1) 100%
      );
      .v-icon {
        transform: rotateX(180deg);
      }
    }
  }
  &-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: transparent;
    .v-icon {
      color: var(--v-primary-base);

      &:hover {
        color: var(--v-secondary-base);
      }
    }
  }
}
</style>
