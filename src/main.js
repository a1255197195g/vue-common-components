/*
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:32:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-12 16:51:40
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
