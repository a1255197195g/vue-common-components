/* eslint-disable no-debugger */
/*
 * @Description:
 * @Version: 1.0
 * @Autor: in hengqi by mengze
 * @Date: 2020-09-19 09:51:08
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 11:37:08
 */
import { uiStatus } from "./ui-status-mixin";
export default {
  created() {},
  data() {
    return {
      custom: {},
      elementUI: {},
      iview: {},
      antDesign: {},
      dataList: []
    };
  },

  mounted() {
    this.custom = this.deepCopy(this.dataSource);
    this.updateUiProperty(this.custom, uiStatus.CUSTOM);

    this.elementUI = this.deepCopy(this.dataSource);
    this.updateUiProperty(this.elementUI, uiStatus.ELEMENT_UI);

    this.iview = this.deepCopy(this.dataSource);
    this.updateUiProperty(this.iview, uiStatus.I_VIEW);
    console.log(this.iview);

    this.antDesign = this.deepCopy(this.dataSource);
    this.updateUiProperty(this.antDesign, uiStatus.ANT_DESIGN);

    this.dataList.push({
      title: "自定义UI",
      dataList: this.custom
    });
    this.dataList.push({
      title: "element-ui",
      dataList: this.elementUI
    });
    this.dataList.push({
      title: "iview",
      dataList: this.iview
    });
    this.dataList.push({
      title: "ant-design",
      dataList: this.antDesign
    });
  },

  methods: {
    updateUiProperty(dataSource, value, key) {
      key = key || "ui";
      key;
      Object.keys(dataSource).forEach(index => {
        let itemList = dataSource[index];
        if (Array.isArray(itemList)) {
          itemList.forEach(item => {
            item[key] = value;
          });
        }
      });
    },

    /**
     * @description {深度拷贝一个数组或者对象，当然也可以拷贝简单类型。}
     * @param {需要拷贝的对象} dataSource;
     * 即使要拷贝的数据不是对象，依然能够正确执行。
     */
    deepCopy(dataSource = {}) {
      //查询是否是需要深度拷贝的对象，
      //如果不是，则直接返回原来的值。
      if (!this.isNeedCopyObject(dataSource)) {
        return dataSource;
      }

      //判断是对象还是数组，并且返回相应的空对象。
      let container = this.getByType(dataSource);
      for (let key in dataSource) {
        let item = dataSource[key];
        //只要是一个属性，无论是不是要深度拷贝的属性，
        //都直接进入下一次递归。
        let result = this.deepCopy(item);
        container[key] = result;
      }
      return container;
    },

    //判断是数组还是普通对象。
    getByType(dataSource) {
      if (Array.isArray(dataSource)) {
        return [];
      }
      return {};
    },

    //判断是非null的对象，还是普通的数据类型
    isNeedCopyObject(dataSource) {
      // eslint-disable-next-line valid-typeof
      return dataSource && typeof dataSource === "object";
    }
  }
};
