<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-16 13:17:58
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-18 13:14:37
-->
<template>
  <div class="hq-input-view">
    <div>
      <HqInput
        v-for="item in dataList1"
        :key="'1' + item.id"
        :data="item"
      ></HqInput>
    </div>
    <div>
      <HqInput
        v-for="item in dataList2"
        :key="'2' + item.id"
        :data="item"
      ></HqInput>
    </div>
    <div>
      <HqInput
        v-for="item in dataList3"
        :key="'3' + item.id"
        :data="item"
      ></HqInput>
    </div>
    <div>
      <HqInput
        v-for="item in dataList4"
        :key="'4' + item.id"
        :data="item"
      ></HqInput>
    </div>
  </div>
</template>
<script>
import HqInput from "@/components/base/hq-input.vue";
export default {
  name: "hq-input-view",
  components: {
    HqInput
  },
  data() {
    return {
      dataList1: [
        {
          id: 1,
          placeholder: "请输入内容",
          class: "big"
        },
        {
          id: 2,
          placeholder: "请输入内容",
          class: "big"
        }
      ],
      dataList2: [
        {
          id: 1,
          placeholder: "请输入内容",
          class: "medium"
        },
        {
          id: 2,
          placeholder: "请输入内容",
          class: "medium"
        }
      ],
      dataList3: [
        {
          id: 1,
          placeholder: "请输入内容",
          class: "small"
        },
        {
          id: 2,
          placeholder: "请输入内容",
          class: "small"
        }
      ],
      dataList4: [
        {
          id: 1,
          placeholder: "请输入内容",
          class: "mini disabled"
        },
        {
          id: 2,
          placeholder: "请输入内容",
          class: "mini"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped></style>
