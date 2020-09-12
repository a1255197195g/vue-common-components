<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 17:23:53
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-12 17:27:31
-->
<template>
  <div class="hq-list">
    <h2>自定义组件列表</h2>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <a @click.prevent="click(item)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
let context = require.context("../views", false, /\.vue$/);
const routerNameList = [];
context.keys().forEach(key => {
  routerNameList.push(key.substr(5, key.length - 14));
});
export default {
  name: "",
  data() {
    return {
      dataList: routerNameList
    };
  },
  methods: {
    click(pathName) {
      if (this.$route.name === pathName) {
        return;
      }
      this.$router.push({
        name: pathName
      });
    }
  }
};
</script>
<style lang="less" scoped>
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
}

li {
  list-style: none;
}

a {
  display: block;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 30px;
}

a:hover {
  color: rgba(0, 0, 0, 1);
  background-color: #f5f5f5;
}
</style>
