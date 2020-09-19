<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-18 14:16:41
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 19:12:37
-->
<template>
  <div class="textarea-field" ref="textareaOutLine">
    <textarea
      v-model="value"
      autocomplete="off"
      @blur="blur"
      @focus="focus"
    ></textarea>
    <p v-if="data.maxLength" class="count-field">
      {{ curCount }}/{{ maxLength }}
    </p>
  </div>
</template>
<script>
export default {
  name: "hq-textarea",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    if (this.data.class) {
      let res = this.data.class.match(/\bdisabled\b/);
      if (res) {
        this.isDisabled = true;
      }
    }
  },
  data() {
    return {
      maxLength: this.data.maxLength,
      curCount: 0,
      value: ""
    };
  },
  watch: {
    value(newValue) {
      if (!this.data.maxLength) {
        return;
      }
      this.curCount = newValue ? newValue.length : 0;
      if (this.curCount > this.maxLength) {
        this.value = this.value.substr(0, this.maxLength);
      }
      //更新外部传入的value
      if (this.data.value) {
        this.data.value = this.value;
      }
    }
  },
  methods: {
    blur() {
      let className = this.$refs.textareaOutLine.className || "";
      this.$refs.textareaOutLine.className = className.replace(/\bfocus\b/, "");
    },
    focus() {
      let className = this.$refs.textareaOutLine.className || "";
      this.$refs.textareaOutLine.className = `${className} focus`;
    }
  }
};
</script>
<style lang="less" scoped>
@import "./hq-base-textarea.less";
</style>
