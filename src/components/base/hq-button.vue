<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:43:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 12:01:06
-->
<template>
  <span>
    <HqBaseButton v-if="data.ui === CUSTOM" :data="data"> </HqBaseButton>
    <el-button
      :type="data.class"
      :plain="plain"
      :round="round"
      v-if="data.ui === ELEMENT_UI"
      :data="data"
      >{{ data.name }}
    </el-button>
    <Button :type="data.class" v-if="data.ui === I_VIEW">{{
      data.name
    }}</Button>
    <a-button :type="data.class" v-if="data.ui === ANT_DESIGN">{{
      data.name
    }}</a-button>
  </span>
</template>
<script>
import HqBaseButton from "../base-custom/hq-base-button";
import uiStatus from "../../ui-status-mixin";
export default {
  name: "",
  mixins: [uiStatus],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HqBaseButton
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      isDisabled: false,
      plain: false,
      round: false
    };
  },
  mounted() {
    console.log(this.data.ui);
    if (this.data.class) {
      let res = this.data.class.match(/\bdisabled\b/);
      this.isDisabled = !!res;
    }

    //处理element-ui的plain字段
    if (this.data.class) {
      let res = this.data.class.match(/\bplain\b/);
      // eslint-disable-next-line no-debugger
      this.plain = !!res;
    }

    //处理element-ui的round字段
    if (this.data.class) {
      let res = this.data.class.match(/\round\b/);
      // eslint-disable-next-line no-debugger
      this.round = !!res;
    }
  },
  methods: {
    buttonDidClicked(...params) {
      if (typeof this.data.method === "function") {
        this.data.method(...params);
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
