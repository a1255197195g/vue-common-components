<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:44:11
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-15 14:46:17
-->
<template>
  <div>
    <div>
      <HqButton
        v-for="item in dataList1"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
    <div>
      <HqButton
        v-for="item in dataList4"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
    <div>
      <HqButton
        v-for="item in dataList2"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
    <div>
      <HqButton
        v-for="item in dataList3"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
    <div>
      <HqButton
        v-for="item in dataList5"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
    <div>
      <HqButton
        v-for="item in dataList6"
        :data="item"
        :key="item.id"
        class="item"
      ></HqButton>
    </div>
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
      dataList1: [
        {
          id: 1,
          name: "默认按钮"
        },
        {
          id: 2,
          name: "主要按钮",
          class: "primary"
        },
        {
          id: 3,
          name: "成功按钮",
          class: "success"
        },
        {
          id: 4,
          name: "信息按钮",
          class: "info"
        },
        {
          id: 5,
          name: "警告按钮",
          class: "warning"
        },
        {
          id: 6,
          name: "危险按钮",
          class: "danger"
        }
      ],
      dataList4: [
        {
          id: 1,
          name: "默认按钮",
          class: "plain"
        },
        {
          id: 2,
          name: "主要按钮",
          class: "primary plain"
        },
        {
          id: 3,
          name: "成功按钮",
          class: "success  plain"
        },
        {
          id: 4,
          name: "信息按钮",
          class: "info  plain"
        },
        {
          id: 5,
          name: "警告按钮",
          class: "warning  plain"
        },
        {
          id: 6,
          name: "危险按钮",
          class: "danger  plain"
        }
      ],
      dataList2: [
        {
          id: 1,
          name: "默认按钮",
          class: "big"
        },
        {
          id: 2,
          name: "中等按钮",
          class: "medium"
        },
        {
          id: 3,
          name: "小型按钮",
          class: "small"
        },
        {
          id: 4,
          name: "超小按钮",
          class: "mini"
        }
      ],
      dataList3: [
        {
          id: 1,
          name: "默认按钮",
          class: "big round"
        },
        {
          id: 2,
          name: "中等按钮",
          class: "medium round"
        },
        {
          id: 3,
          name: "小型按钮",
          class: "small round"
        },
        {
          id: 4,
          name: "超小按钮",
          class: "mini round"
        }
      ],
      dataList5: [
        {
          id: 1,
          name: "大",
          class: "big  circle primary"
        },
        {
          id: 2,
          name: "中",
          class: "medium  circle danger"
        },
        {
          id: 3,
          name: "小",
          class: "small  circle success"
        },
        {
          id: 4,
          name: "微",
          class: "mini  circle info"
        }
      ],
      dataList6: [
        {
          id: 1,
          name: "默认按钮",
          class: "plain disabled"
        },
        {
          id: 2,
          name: "主要按钮",
          class: "primary disabled"
        },
        {
          id: 3,
          name: "成功按钮",
          class: "success  disabled"
        },
        {
          id: 4,
          name: "信息按钮",
          class: "info   disabled"
        },
        {
          id: 5,
          name: "警告按钮",
          class: "warning   disabled"
        },
        {
          id: 6,
          name: "危险按钮",
          class: "danger   disabled"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.item {
  margin: 10px;
}
</style>
