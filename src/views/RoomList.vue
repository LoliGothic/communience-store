<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col md="4" offset-md="4" align-self="center">
        <p style="font-size: 2em; text-align: center">ルーム一覧</p>
      </v-col>
      <v-col md="1" offset-md="3">
        <v-btn class="mb-2" fab dark color="indigo" to="/roomform">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <template v-if="$route.query.onlyowner">
      <v-row>
        <v-col md="6">
          <v-btn
            block
            elevation="2"
            class="pa-2"
            x-large
            outlined
            tile
            @click="to('SCLA')"
          >
            SCLA
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row v-for="j in 3" :key="j">
        <v-col v-for="k in 2" :key="k" md="6">
          <v-btn
            block
            elevation="2"
            class="pa-2"
            x-large
            outlined
            tile
            @click="to(RoomName[k + (j - 1) * 2 - 1])"
          >
            {{ RoomName[k + (j - 1) * 2 - 1] }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      RoomName: [
        "理工学部",
        "知能情報システム",
        "SCLA",
        "軽音部",
        "英語",
        "情報システム実験",
      ],
    };
  },
  methods: {
    to(param) {
      this.$router.push({ path: "/participantslist?roomname=" + param });
    },
  },
};
</script>

