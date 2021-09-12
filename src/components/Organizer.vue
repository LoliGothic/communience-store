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
                    <v-btn rounded color="primary" dark @click="done(index)">
                      かくす
                    </v-btn>
                  </div>
                  <div v-else class="text-center">
                    {{ item.header }}
                    <v-btn rounded color="primary" dark @click="done(index)">
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
                  <v-btn rounded color="primary" dark @click="done(index)">
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
export default {
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    done(num) {
      this.$store.commit("toggleHidden", num)
    },
  },
};
</script>

