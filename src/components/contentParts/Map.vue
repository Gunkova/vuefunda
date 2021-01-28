<template lang="pug">
  div#map 
</template>

<script>
export default {
  name: "Map",
  props: {
    coordinates: {
      type: Object,
      required: true
    }
  },
  data() {
    return { isLoading: false };
  },
  created() {
    this.$root.$on("loading_script", () => {
      this.isLoading = true;
    });
  },
  mounted() {
    this.useScript();
  },
  methods: {
    loadScript() {
      return new Promise(resolve => {
        if (this.isLoading) {
          return null;
        }

        let script = document.createElement("script");
        script.setAttribute(
          "src",
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCySPmlQysibOd8bUduboyPEzlkPMAf4B8&libraries=&v=weekly"
        );
        script.async = true;

        script.onload = () => {
          resolve();
        };

        document.head.appendChild(script);
      });
    },

    async useScript() {
      const { coordinates } = this;
      try {
        await this.loadScript();

        const destination = { lat: coordinates.y, lng: coordinates.x };

        const map = new window["google"].maps.Map(
          document.getElementById("map"),
          {
            zoom: 17,
            center: destination
          }
        );

        new window["google"].maps.Marker({
          position: destination,
          map: map
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
