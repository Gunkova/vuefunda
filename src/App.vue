<template lang="pug">
    .page
        Header(:logoImg="logoImg" :logoSrc="logoSrc")
        //- show the content on current page if the info is fetched
        Content(v-if="info" :info="info")
        //- show loader while waiting for info to be fetched
        Loader(v-else)
        Footer
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
import Loader from "./components/Loader.vue";

export default Vue.extend({
  data() {
    return {
      info: undefined,
      logoImg:
        "https://assets.fstatic.nl/master_3398/assets/components/logo/fundawonen-logo.svg",
      logoSrc: "https://funda.nl"
    };
  },
  components: {
    Header,
    Content,
    Footer,
    Loader
  },
  mounted() {
    setTimeout(() => {
      axios
        .get(
          "http://localhost:8010/proxy/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/2727385f-f14d-45d8-82b1-2569c5cfdd4b/"
        )
        .then(response => (this.info = response.data));
    }, 1000);
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
  color: var(--v-text-base);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.h1 {
  font-size: 24px;
  margin: 0;

  @media (min-width: 576px) {
    font-size: 36px;
    margin: 0 0 10px;
  }
}

.h2 {
  font-size: 20px;
  color: var(--v-primary-base);
  margin: 0 0 10px;

  @media (min-width: 576px) {
    font-size: 24px;
    margin: 0 0 15px;
  }
}
</style>
