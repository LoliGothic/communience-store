<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col md="4" offset-md="4" align-self="center">
        <p style="font-size: 2em; text-align: center">ルーム一覧</p>
      </v-col>
      <v-col md="1" offset-md="3">
        <v-btn class="mb-2" fab dark color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-for="j in 3" :key="j">
      <v-col v-for="k in 2" :key="k" md="6">
        <v-btn block elevation="2" class="pa-2" x-large outlined tile>
          {{ RoomName[k + (j - 1) * 2 - 1] }}
        </v-btn>
      </v-col>
    </v-row>
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
      ]
    }
  }
}
</script>

