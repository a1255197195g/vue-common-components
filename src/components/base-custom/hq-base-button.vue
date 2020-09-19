<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:43:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 19:08:25
-->
<template>
  <button
    ref="button"
    :class="data.class"
    @click.stop="buttonDidClicked"
    class="hq-base-button small"
  >
    <i class="iconfont" v-if="data.icon"></i> {{ data.name }}
  </button>
</template>
<script>
export default {
  name: "",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
      validator(data) {
        data.style = data.style || {};
        if (!data.style.width && data.name && data.name.length > 4) {
          let width = data.name.length * 16 + 30 + "px";
          data.style.width = width;
        }
        return true;
      }
    }
  },
  methods: {
    buttonDidClicked(...params) {
      if (typeof this.$parent.buttonDidClicked === "function") {
        this.$parent.buttonDidClicked(...params);
      }
    }
  }
};
</script>
<style lang="less">
@import "./hq-base-button.less";
</style>
