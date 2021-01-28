<template lang="pug">
  ul.chips 
    li.chip(v-for="(chip, index) in chips" :key="index")
      v-icon(color="red") {{ chip.icon }}
      span.chip-text {{ chip.text }}
      
</template>

<script>
export default {
  name: "Chips",
  props: {
    chips: {
      type: Array,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.chips {
  list-style: none;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    align-items: flex-start;
    justify-content: flex-start;
  }
}

.chip {
  display: flex;
  margin: 0 5px 5px 0;
  padding: 8px;
  align-items: flex-start;
  background: var(--v-light-base);
  border-radius: 10px;
  .v-icon {
    color: var(--v-primary-base);
  }
}

.chip-text {
  padding: 0px 0 0 8px;
  text-transform: lowercase;
}
</style>
