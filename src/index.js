import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
import Vue2TouchEvents from "vue2-touch-events";
import "@babel/polyfill";

Vue.use(Vue2TouchEvents);
Vue.use(Vuetify);

export const preset = {
  icons: {
    iconfont: "mdi",
    values: {}
  },
  theme: {
    disable: false,
    themes: {
      light: {
        primary: "#0071b3",
        secondary: "#00517f",
        accent: "#f7a100",
        text: "#333333",
        warning: "#f03c30",
        success: "#acc700",
        light: "#ededed",
        dark: "#999999",
        lightest: "#ffffff"
      }
    },
    options: { customProperties: true }
  }
};

new Vue({
  vuetify: new Vuetify({
    preset,
    theme: { light: true }
  }),
  render: createElement => createElement(App)
}).$mount("#app");
