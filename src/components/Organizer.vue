<template>
  <v-content>
    <v-container fluid fill-height>
      <v-row justify="center" align-content="center">
        <v-col cols="12" sm="7" offset-sm="0">
          <v-card>
            <v-list>
              <template v-for="(item, index) in items.slice(0)">
                <v-list-item-title
                  v-if="item.header"
                  :key="item.header"
                  class="text-h3"
                >
                  <div v-if="item.hidden" class="text-center">
                    <s>{{ item.header }}</s>
                    <v-btn rounded color="primary" dark @click="hidden(index)">
                      かくす
                    </v-btn>
                  </div>
                  <div v-else class="text-center">
                    {{ item.header }}
                    <v-btn rounded color="primary" dark @click="hidden(index)">
                      かくす
                    </v-btn>
                  </div>
                </v-list-item-title>
                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>
                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-icon x-large :color="item.icon_color">
                      {{ item.icon }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-title
                    v-if="item.hidden"
                    v-html="item.hidden_title"
                  ></v-list-item-title>
                  <v-list-item-title
                    v-else
                    v-html="item.ord_title"
                  ></v-list-item-title>
                  <v-btn rounded color="primary" dark @click="hidden(index)">
                    かくす
                  </v-btn>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import {
  mdiCake,
  mdiNotebookPlus,
  mdiNotebookRemove,
  mdiFood,
  mdiFoodOff,
  mdiGamepadVariant,
} from "@mdi/js";

export default {
  data: () => ({
    items: [
      { header: "名前", hidden: false },
      {
        icon: mdiCake,
        icon_color: "deep-orange lighten-3",
        ord_title: '<font size="5">誕生日</font>',
        hidden_title: '<font size="5"><s>誕生日</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
      {
        icon: mdiNotebookPlus,
        icon_color: "blue",
        ord_title: '<font size="5">得意科目</font>',
        hidden_title: '<font size="5"><s>得意科目</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
      {
        icon: mdiNotebookRemove,
        icon_color: "purple",
        ord_title: '<font size="5">苦手科目</font>',
        hidden_title: '<font size="5"><s>苦手科目</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
      {
        icon: mdiFood,
        icon_color: "green",
        ord_title: '<font size="5">好きな食べ物</font>',
        hidden_title: '<font size="5"><s>好きな食べ物</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
      {
        icon: mdiFoodOff,
        icon_color: "red",
        ord_title: '<font size="5">嫌いな食べ物</font>',
        hidden_title: '<font size="5"><s>嫌いな食べ物</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
      {
        icon: mdiGamepadVariant,
        icon_color: "cyan",
        ord_title: '<font size="5">趣味</font>',
        hidden_title: '<font size="5"><s>趣味</s></font>',
        hidden: false,
      },
      { divider: true, inset: true },
    ],
  }),
  methods: {
    hidden(num) {
      this.items[num].hidden = !this.items[num].hidden;
    },
  },
};
</script>

