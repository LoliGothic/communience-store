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
                  <div v-if="item.part_hidden" class="text-center">
                    <v-btn depressed color="primary" @click="done(index)"> 名前：解答 </v-btn>
                  </div>

                  <div v-else class="text-center">
                    {{ item.contents }}
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
                  <v-list-item-content
                    v-html="item.ord_title"
                  ></v-list-item-content>
                  <v-list-item-content
                    v-if="item.part_hidden"
                  >
                    <v-btn depressed color="primary" @click="done(index)"> 解答 </v-btn>
                  </v-list-item-content>
                  <v-list-item-content
                    v-else
                    v-html="item.contents"
                  ></v-list-item-content>
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
export default {
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    done(num) {
      this.$store.commit("openContents", num)
    },
  },
};
</script>