import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui"; // element-ui のimport
import locale from "element-ui/lib/locale/lang/ja"; // element-ui の言語を日本語に設定
import "element-ui/lib/theme-chalk/index.css"; // element-ui のCSSをimport

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
