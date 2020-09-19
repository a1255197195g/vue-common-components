<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-18 14:16:41
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 16:04:23
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
.textarea-field {
  position: relative;
  display: inline-block;
  padding: 5px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  font-size: 14px;
  height: 40px;
  width: 260px;
  resize: none;
  border: none;
  outline: none;
  color: #606266;
}
textarea:focus {
  border: none;
  outline: none;
}

.textarea-field.focus {
  border: 1px solid #409eff;
}
.disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.count-field {
  font-size: 12px;
  color: #909399;
  text-align: right;
}
</style>
