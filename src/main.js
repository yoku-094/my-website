import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/sass/main.scss";
import ElementUI from "element-ui"; // element-ui のimport
import locale from "element-ui/lib/locale/lang/ja"; // element-ui の言語を日本語に設定
import "element-ui/lib/theme-chalk/index.css"; // element-ui のCSSをimport

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

Vue.component("open-modal", {
  template: `
    <div id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <button v-on:click="closeModal">close</button>
        </div>
    </div>
    `,
  // methods: {
  //   clickEvent: function () {
  //     this.$emit("from-child");
  //   },
  // },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
