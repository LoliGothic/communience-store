<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col md="4" offset-md="4" align-self="center">
        <p style="font-size: 1.9em; text-align: center">
          {{ $route.query.roomname }}<br />参加者一覧
        </p>
      </v-col>
      <v-col md="3" offset-md="1" align-self="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="$route.query.roomname == 'SCLA'" color="primary" dark v-bind="attrs" v-on="on">
              オーナーメニュー
            </v-btn>
          </template>
          <v-card>
            <v-container>
              <v-row>
                <v-col md="12" align="center">
                  <v-btn depressed color="primary" block x-large @click="dialog = false" to="/organizer">
                    イベント開催
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12" align="center">
                  <v-btn depressed color="teal" block x-large dark @click="dialog = false" to="/roominvite">
                    メンバー招待
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" offset-md="2">
        <v-text-field label="検索" filled rounded dense></v-text-field>
      </v-col>
    </v-row>
    <v-row v-for="j in 2" :key="j">
      <v-col v-for="k in 2" :key="k" md="6">
        <v-btn block elevation="2" class="pa-2" x-large outlined tile @click="to(ParticipantName[k + (j - 1) * 2 - 1])">
          {{ ParticipantName[k + (j - 1) * 2 - 1] }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      ParticipantName: ["佐藤武士", "岡田花子", "山崎秀樹", "斉藤大地"],
    };
  },
  methods: {
    to(param) {
      this.$router.push({ path: "/friends-card?friendname=" + param });
    },
  },
};
</script>