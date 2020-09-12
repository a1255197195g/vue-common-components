<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:44:11
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-12 17:35:51
-->
<template>
  <div>
    <HqButton :data="data1"></HqButton>
  </div>
</template>
<script>
import HqButton from "@/components/base/hq-button.vue";
export default {
  name: "",
  components: {
    HqButton
  },
  data() {
    return {
      data1: {
        name: "按钮"
      }
    };
  }
};
</script>
<style lang="less" scoped></style>
