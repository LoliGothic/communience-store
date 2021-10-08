<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      @transitionend="drawerFlip"
      clipped
    >
      <v-list flat>
        <v-list-item
          v-for="item in items"
          v-bind:key="item.i"
          @click="to(item.link)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.subtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  created() {
    this.items.push(
      {
        title: "ルーム一覧",
        subtitle: "参加しているルーム一覧",
        link: "/roomlist",
      },
      {
        title: "開催中のイベント一覧",
        subtitle: "現在参加できるイベントの一覧",
        link: "/eventlist",
      },
      {
        title: "自分のカード",
        subtitle: "自分の自己紹介カード",
        link: "/my-card",
      },
      {
        title: "交換カード一覧",
        subtitle: "これまでに交換した自己紹介カード一覧",
        link: "/cardlist",
      }
    );
  },
  data() {
    return {
      drawer: false,
      items: [],
    };
  },
  methods: {
    to(link) {
      this.$router.push({ path: link });
    },
    drawerFlip() {
      this.drawer = !this.drawer;
    },
  },
};
</script>