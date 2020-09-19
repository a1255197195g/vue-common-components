/*
 * @Description:
 * @Version: 1.0
 * @Autor: in hengqi by mengze
 * @Date: 2020-09-12 15:32:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 11:24:26
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

//引入ant-design-vue ui库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

//引入iview ui库
import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(iView);

//引入element-ui 库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
