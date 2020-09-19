<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2020-09-12 15:44:11
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 11:33:50
-->
<template>
  <div>
    <div class="wrap" v-for="(dataItemList, index) in dataList" :key="index">
      <h2>{{ dataItemList.title }}</h2>
      <div
        v-for="(itemList, key) in dataItemList.dataList"
        :key="key"
        style="margin: 10px"
      >
        <HqButton
          v-for="item in itemList"
          :data="item"
          :key="item.id"
          class="item"
        ></HqButton>
      </div>
    </div>
  </div>
</template>
<script>
import HqButton from "@/components/base/hq-button.vue";
import dataSouceMixin from "../data-souce-mixin";
export default {
  name: "",
  mixins: [dataSouceMixin],
  components: {
    HqButton
  },

  data() {
    return {
      dataSource: {
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
      }
    };
  }
};
</script>
<style lang="less" scoped>
.wrap {
  border: 1px solid #85ce61;
  border-radius: 4px;
  margin-bottom: 20px;
}

h2 {
  height: 40px;
  line-height: 40px;
  color: #444;
  padding-left: 12px;
}

.item {
  margin: 5px;
}
</style>
