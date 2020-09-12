<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:43:40
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-12 18:27:17
-->
<template>
  <a class="hq-base-button" @click.prevent="buttonDidClicked"
    >{{ data.name }}
    <transition name="fade">
      <div v-show="isMask" class="wavesbtn"></div>
    </transition>
  </a>
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
      isMask: false
    };
  },
  mounted() {},
  methods: {
    buttonDidClicked() {
      this.isMask = true;
      setTimeout(() => {
        this.isMask = false;
      }, 100);
    }
  }
};
</script>
<style lang="less" scoped>
.hq-base-button {
  user-select: none;
  display: inline-block;
  width: 84px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: red;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.wavesbtn {
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
