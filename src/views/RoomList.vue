<template>

 <v-container class="grey lighten-5">
    <v-row
      v-for="j in 6"
      :key="j"
    >
      <v-col
        v-for="k in 2"
        :key="k"
        md="4"

        
      >
        
        <v-btn
          elevation="2"
          class="pa-2"
          outlined
          tile
        >
          ルーム {{ k+(j-1)*2 }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  
</template>
