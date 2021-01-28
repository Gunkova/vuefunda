<template lang="pug">
  .meta
    .title
      h1.h1 {{ address }}
      .subtitle {{ index }} {{ location }}
    .meta-info
      .price(v-html="price") 
      .status(v-bind:class="isSold && 'sold'") {{ statusText }}
</template>

<script>
export default {
  name: "Meta",
  props: {
    address: {
      type: String,
      required: false
    },
    index: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    statusText: {
      type: String,
      required: true
    },
    isSold: {
      type: Boolean,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
}
.subtitle {
  font-size: 18px;
  color: var(--v-dark-base);

  @media (min-width: 576px) {
    font-size: 24px;
  }
}
.meta {
  margin-bottom: 30px;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    &-info {
      text-align: right;
    }
  }
}

.price {
  color: var(--v-primary-base);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  @media (min-width: 576px) {
    margin-bottom: 10px;
  }
}

.status {
  display: inline-block;
  vertical-align: middle;
  padding: 8px;
  border-radius: 10px;
  background: var(--v-success-base);
  color: var(--v-lightest-base);

  &.sold {
    background: var(--v-warning-base);
  }
}
</style>
