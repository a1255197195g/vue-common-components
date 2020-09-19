<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:32:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 18:14:31
-->
<template>
  <div id="app" style="font-size:20px">
    <!-- <router-view></router-view> -->
    <ul style="border: 1px solid yellow">
      <li
        v-for="item in 10"
        :key="item"
        style="width: 200px;height:200px;border: 1px solid red; list-style:none;"
      >
        {{ item }}
      </li>
    </ul>
    <div class="music-field">听音乐</div>
    <div class="music-field back" @click="toBack">返回</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.test {
  text-overflow: ellipsis;
  width: 100px;
  height: 300px;
  border: 1px solid red;
  // overflow: hidden;
}

ul {
  display: flex;
  flex-wrap: wrap;
  li {
    + li {
      margin-left: 25px;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 1000px;
  margin: 30px auto 10px;
}

* {
  padding: 0;
  margin: 0;
}

.music-field {
  position: fixed;
  width: 60px;
  height: 60px;
  background-color: rgba(205, 0, 0, 1);
  text-align: center;
  line-height: 60px;
  border-radius: 30px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  right: 30px;
  top: 30px;
  font-size: 14px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
}

.music-field:hover {
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
}

.back {
  top: 100px;
  background-color: blueviolet;
}
</style>
