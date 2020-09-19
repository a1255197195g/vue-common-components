/*
 * @Description:
 * @Version: 1.0
 * @Autor: in hengqi by mengze
 * @Date: 2020-09-19 11:26:09
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2020-09-19 11:32:58
 */
const uiStatus = {
  CUSTOM: "custom",
  ELEMENT_UI: "element-ui",
  I_VIEW: "i-view",
  ANT_DESIGN: "ant-design"
};

export default {
  created() {
    for (let key in uiStatus) {
      let item = uiStatus[key];
      this[key] = item;
    }
  }
};

export { uiStatus };
