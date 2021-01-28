<template lang="pug">
  .container 
    Meta(:address="address" :index="index" :location="location" :price="price" :statusText="statusText" :isSold="isSold")
    Slider(:images="images")
    Chips(:chips="chips")
    Description(:text="description")
    Map(:coordinates="coordinates")
</template>

<script>
import Meta from "./contentParts/Meta.vue";
import Chips from "./contentParts/Chips.vue";
import Description from "./contentParts/Description.vue";
import Map from "./contentParts/Map.vue";
import Slider from "./contentParts/Slider.vue";

export default {
  name: "Content",
  data() {
    // format props for components
    return {
      chips: [
        { icon: "mdi-floor-plan", text: `${this.info.AantalKamers} kamers` },
        { icon: "mdi-home-floor-a", text: this.info.AantalWoonlagen },
        {
          icon: "mdi-human-male-female",
          text: `${this.info.AantalBadkamers} badkamers`
        },
        { icon: "mdi-pipe-disconnected", text: this.info.Voorzieningen },
        { icon: "mdi-excavator", text: `Gebouwd in ${this.info.Bouwjaar}` },
        { icon: "mdi-home-roof", text: this.info.SoortDak },
        { icon: "mdi-radiator", text: this.info.Verwarming },
        { icon: "mdi-garage-open", text: this.info.SoortGarage }
      ],
      address: this.info.Adres,
      index: this.info.Postcode,
      location: this.info.Plaats,
      images: this.info.Media.map(item => {
        const items = item.MediaItems[2];
        if (items) {
          const keys = Object.keys(items);
          return items[keys[3]];
        }
      }).filter(el => el),
      description: this.info.VolledigeOmschrijving,
      statusText: this.info.VerkoopStatus,
      isSold: this.info.IsVerkocht,
      price: this.info.PrijsGeformatteerd,
      coordinates: {
        y: this.info.WGS84_Y,
        x: this.info.WGS84_X
      }
    };
  },
  components: {
    Meta,
    Chips,
    Slider,
    Description,
    Map
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  max-width: 1600px;
  margin: auto;
  flex: 1;
}
</style>
