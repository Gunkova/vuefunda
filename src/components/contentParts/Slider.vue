<template lang="pug">
  .slider 
    .slider-nav 
      .slider-pages {{ translate+1 }}/{{ numberOfSlides }}
      .slider-buttons 
        .slider-button.left(v-on:click="slidePrevHandler" v-bind:class="isLeftDisabled && 'disabled'")
          v-icon(large) mdi-chevron-left
        .slider-button.right(v-on:click="slideNextHandler" v-bind:class="isRightDisabled && 'disabled'")
          v-icon(large) mdi-chevron-right
    .slider-wrapper(v-bind:style="{'transform': `translate(-${translate*100}vw)`}")
      .slider-slide(v-for="(image, index) in images" :key="index" v-touch:swipe.left="slideNextHandler" v-touch:swipe.right="slidePrevHandler")
        img.slider-image(:src="image" loading="lazy")
      
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      translate: 0,
      numberOfSlides: this.images.length,
      isLeftDisabled: true,
      isRightDisabled: false
    };
  },
  props: {
    images: {
      type: Array,
      required: false
    }
  },
  methods: {
    slideNextHandler: function() {
      const { numberOfSlides, translate, isLeftDisabled } = this;
      if (isLeftDisabled) {
        this.isLeftDisabled = false;
      }

      // check if there are more slides
      let maxTranslate = numberOfSlides - 1;
      const width = window.innerWidth;

      if (width > 1224) {
        maxTranslate = Math.floor(maxTranslate / 4);
      }

      if (width > 768 && width < 1224) {
        maxTranslate = Math.floor(maxTranslate / 3);
      }

      if (width > 576 && width < 768) {
        maxTranslate = Math.floor(maxTranslate / 2);
      }
      // translate wrapper to the left
      if (translate < maxTranslate) {
        this.translate++;
      }
      // set right button disabled if the last slides are shown
      if (translate == maxTranslate) {
        this.isRightDisabled = true;
      }
    },
    slidePrevHandler: function() {
      const { translate, isRightDisabled } = this;
      if (isRightDisabled) {
        this.isRightDisabled = false;
      }

      // translate wrapper to the right
      if (translate > 0) {
        this.translate--;
      }
      // set right button disabled if the first slides are shown
      if (translate == 0) {
        this.isLeftDisabled = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
  &-wrapper {
    display: flex;
    transition: transform 0.2s linear;
    margin: 0 -20px;
  }
  &-image {
    display: block;
    width: 100%;
    max-height: 100%;
  }
  &-slide {
    min-width: 100%;
    max-width: 100%;
    padding: 0 20px;
    overflow: hidden;
  }
  &-pages {
    font-weight: 700;
    position: relative;
    z-index: 2;
  }
  &-nav {
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 60px;
    height: 60px;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    backface-visibility: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 60px 60px;
      border-color: transparent transparent var(--v-lightest-base) transparent;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 60px 0 0 60px;
      border-color: transparent transparent transparent var(--v-lightest-base);
      display: none;
    }
  }

  &-buttons {
    display: none;
  }
  &-button {
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    &.left {
      left: 0;
      justify-content: flex-start;
    }
    &.right {
      right: 0;
      justify-content: flex-end;
    }
    &.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    &:hover {
      .v-icon {
        color: var(--v-secondary-base);
      }
    }
    .v-icon {
      color: var(--v-primary-base);
    }
  }

  @media (min-width: 576px) {
    &-pages {
      display: none;
    }
    &-buttons {
      display: block;
    }
    &-slide {
      min-width: 50vw;
      padding: 0 10px;
    }
    &-nav {
      width: auto;
      left: -1px;

      &:after {
        display: block;
      }
    }
    &-buttons {
      display: block;
    }
  }

  @media (min-width: 768px) {
    &-slide {
      min-width: 33.3vw;
    }
  }

  @media (min-width: 1224px) {
    &-slide {
      min-width: 25vw;
    }
  }
}
</style>
