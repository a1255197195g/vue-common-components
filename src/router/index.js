/*
 * @Description:
 * @Version: 1.0
 * @Autor: in hengqi by mengze
 * @Date: 2020-09-12 15:37:09
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-12 17:26:17
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let context = require.context("../views", false, /\.vue$/);
const routerPathList = [];
context.keys().forEach(key => {
  let entity = context(key).default;
  let path = entity["__file"];
  let name = key.substr(5, key.length - 14);
  const result = {
    name: name,
    path: name,
    component: () => import(path.replace("/*src", "@"))
  };
  routerPathList.push(result);
});

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/music-views/hq-list.vue")
    },
    {
      path: "/button",
      name: "button",
      component: () => import("@/views/hq-button-view.vue")
    }
  ]
});

console.log(router);

export default router;
