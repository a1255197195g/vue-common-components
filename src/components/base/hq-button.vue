<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:43:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-16 13:09:59
-->
<template>
  <button
    class="hq-base-button"
    :class="data.class"
    :style="data.style"
    disabled="isDisabled"
    @click.prevent="buttonDidClicked"
  >
    <i class="iconfont" v-if="data.icon"></i> {{ data.name }}
  </button>
</template>
<script>
export default {
  name: "",
  props: {
    data: {
      type: Object
    }
  },
  data() {
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
<style lang="less" scoped>
.hq-base-button {
  outline: none;
  user-select: none;
  display: inline-block;
  padding: 0px 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  box-sizing: border-box;
  &.round {
    border-radius: 20px;
  }
  &.circle {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  &:hover {
    border: 1px solid #b3d8ff;
    color: #409eff;
    background-color: #ecf5ff;
  }
}

.hq-base-button.primary {
  border: none;
  background-color: #409eff;
  color: #fff;
  &:hover {
    border: none;
    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.hq-base-button.success {
  border: none;
  color: #fff;
  background-color: #85ce61;
  &:hover {
    border: none;
    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.hq-base-button.info {
  border: none;
  color: #fff;
  background-color: #a6a9ad;
  &:hover {
    border: none;
    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.hq-base-button.warning {
  border: none;
  color: #fff;
  background-color: #e6a23c;
  &:hover {
    border: none;
    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.hq-base-button.danger {
  border: none;
  background-color: #f56c6c;
  color: #fff;
  &:hover {
    border: none;
    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.plain {
  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
    background-color: #ecf5ff;
    &:before {
      display: none;
    }
  }
}

.plain.primary {
  border: 1px solid #b3d8ff;
  color: #409eff;
  background-color: #ecf5ff;
  &:hover {
    border: 1px solid transparent;
    background-color: #409eff;
    color: #fff;
    &:before {
      display: none;
    }
  }
}

.plain.success {
  border: 1px solid #c2e7b0;
  color: #85ce61;
  background-color: #f0f9eb;
  &:hover {
    border: 1px solid transparent;
    background-color: #85ce61;
    color: #fff;
    &:before {
      display: none;
    }
  }
}

.plain.info {
  border: 1px solid #d3d4d6;
  color: #a6a9ad;
  background-color: #f4f4f5;
  &:hover {
    border: 1px solid transparent;
    background-color: #a6a9ad;
    color: #fff;
    &:before {
      display: none;
    }
  }
}

.plain.warning {
  border: 1px solid #f5dab1;
  color: #e6a23c;
  background-color: #fdf6ec;
  &:hover {
    border: 1px solid transparent;
    background-color: #e6a23c;
    color: #fff;
    &:before {
      display: none;
    }
  }
}

.plain.danger {
  border: 1px solid #fbc4c4;
  color: #f56c6c;
  background-color: #fef0f0;
  &:hover {
    border: 1px solid transparent;
    background-color: #f56c6c;
    color: #fff;
    &:before {
      display: none;
    }
  }
}

.big {
  height: 44px;
  line-height: 44px;
  padding: 0 26px;
  font-size: 16px;
  &.round {
    border-radius: 22px;
  }
  &.circle {
    width: 44px;
    height: 44px;
    padding: 0;
    border-radius: 22px;
  }
}

.medium {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  font-size: 14px;
  &.round {
    border-radius: 20px;
  }
  &.circle {
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 20px;
  }
}

.small {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  font-size: 13px;
  &.round {
    border-radius: 42px;
  }
  &.circle {
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 18px;
  }
}

.mini {
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  font-size: 12px;
  &.round {
    border-radius: 14px;
  }
  &.circle {
    width: 28px;
    height: 28px;
    padding: 0;
    border-radius: 14px;
  }
}

.disabled {
  background-color: #f7f7f7 !important;
  border: 1px solid #dddee1 !important;
  color: #bbbec4 !important;
  cursor: no-drop;
  &:before {
    content: "";
    display: none !important;
  }
}
</style>
