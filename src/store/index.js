import Vue from 'vue'
import Vuex from 'vuex'
import {
  mdiCake,
  mdiNotebookPlus,
  mdiNotebookRemove,
  mdiFood,
  mdiFoodOff,
  mdiGamepadVariant,
} from "@mdi/js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { header: "名前", hidden: false, contents: "田中太郎 " },
      {
        icon: mdiCake,
        icon_color: "deep-orange lighten-3",
        ord_title: '<font size="5">誕生日：</font>',
        hidden_title: '<font size="5"><s>誕生日：</s></font>',
        hidden: false,
        contents: '<font size="3">4月1日</font>',
      },
      { divider: true, inset: true },
      {
        icon: mdiNotebookPlus,
        icon_color: "blue",
        ord_title: '<font size="5">得意科目：</font>',
        hidden_title: '<font size="5"><s>得意科目：</s></font>',
        hidden: false,
        contents: '<font size="3">数学</font>',
      },
      { divider: true, inset: true },
      {
        icon: mdiNotebookRemove,
        icon_color: "purple",
        ord_title: '<font size="5">苦手科目：</font>',
        hidden_title: '<font size="5"><s>苦手科目：</s></font>',
        hidden: false,
        contents: '<font size="3">英語</font>',
      },
      { divider: true, inset: true },
      {
        icon: mdiFood,
        icon_color: "green",
        ord_title: '<font size="5">好きな食べ物：</font>',
        hidden_title: '<font size="5"><s>好きな食べ物：</s></font>',
        hidden: false,
        contents: '<font size="3">オムライス</font>',
      },
      { divider: true, inset: true },
      {
        icon: mdiFoodOff,
        icon_color: "red",
        ord_title: '<font size="5">嫌いな食べ物：</font>',
        hidden_title: '<font size="5"><s>嫌いな食べ物：</s></font>',
        hidden: false,
        contents: '<font size="3">パクチー</font>',
      },
      { divider: true, inset: true },
      {
        icon: mdiGamepadVariant,
        icon_color: "cyan",
        ord_title: '<font size="5">趣味：</font>',
        hidden_title: '<font size="5"><s>趣味：</s></font>',
        hidden: false,
        contents: '<font size="3">アニメを見ること</font>',
      },
      { divider: true, inset: true },
    ]
  },
  mutations: {
    toggleHidden(state, num) {
      state.items[num].hidden = !state.items[num].hidden
    }
  }
})