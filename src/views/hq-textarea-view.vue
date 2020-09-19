<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-18 14:16:20
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 16:04:33
-->
<template>
  <div class="hq-textarea-view">
    <HqTextarea
      v-for="(item, index) in dataList"
      :data="item"
      :key="index"
    ></HqTextarea>
  </div>
</template>
<script>
import HqTextarea from "@/components/base/hq-textarea";
export default {
  name: "hq-textarea-view",
  components: {
    HqTextarea
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          name: "HqTextarea",
          maxLength: 250
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped></style>
