<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-17 12:48:21
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 15:29:15
-->

<template>
  <input
    autocomplete="off"
    :id="uuid"
    size="small"
    :disabled="isDisabled"
    v-model="data.value"
    :placeholder="data.placeholder"
    :class="data.class"
  />
</template>
<script>
export default {
  name: "hq-input",
  props: {
    data: {}
  },
  data: function() {
    return {
      isDisabled: false
    };
  },
  mounted() {
    if (this.data.class) {
      let res = this.data.class.match(/\bdisabled\b/);
      if (res) {
        this.isDisabled = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
input {
  height: 32px;
  line-height: 50%;
  width: 220px;

  outline: none;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  position: relative;
  padding-left: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
}

input:focus {
  border: 1px solid #409eff;
}

.disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.big {
  height: 44px;
  width: 260px;
  font-size: 16px;
  padding-left: 15px;
}

.medium {
  height: 40px;
  width: 240px;
  font-size: 14px;
  padding-left: 12px;
}

.small {
  height: 32px;
  width: 220px;
  font-size: 13px;
  padding-left: 10px;
}

.mini {
  height: 28px;
  width: 200px;
  font-size: 12px;
  padding-left: 8px;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c0c4cc;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c0c4cc;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c0c4cc;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #c0c4cc;
}
</style>
