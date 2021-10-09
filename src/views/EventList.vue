<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col md="4" offset-md="4" align-self="center">
        <p style="font-size: 1.9em; text-align: center">開催中イベント一覧</p>
      </v-col>
      <v-col md="2" offset-md="2">
        <v-btn class="mb-2" rounded dark color="indigo">
          イベントを開催
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-for="j in 1" :key="j">
      <v-col v-for="k in 1" :key="k" md="6">
        <v-btn block elevation="2" class="pa-2" x-large outlined tile to="/participant">
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
        "SCLA"
      ]
    }
  }
}
</script>