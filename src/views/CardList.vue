<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col md="4" offset-md="4" align-self="center">
        <p style="font-size: 1.9em; text-align: center">交換したカード一覧</p>
      </v-col>
    </v-row>
    <v-row>
        <v-col md="8" offset-md="2">
        <v-text-field
            label="検索"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row v-for="j in 2" :key="j">
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
        "田中太郎",
        "岡田花子",
        "山崎秀樹",
        "斉藤大地"
      ],
    }
  }
}
</script>