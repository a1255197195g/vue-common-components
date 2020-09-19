<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-18 17:09:00
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 18:12:49
-->
<template>
  <input
    class="base-input"
    :placeholder="data.placeholder"
    :class="data.class"
  />
</template>
<script>
export default {
  name: "hq-input",
  props: {
    data: {},
    uuid: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "./hq-base-input.less";
</style>
