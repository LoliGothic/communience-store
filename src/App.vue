<template>
  <v-app id="inspire">
    <app-navigation ref="navigation" />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="flipNavigation"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    data: () => ({ drawer: null }),
    components: {
      "app-navigation": Navigation
    },
    methods: {
      flipNavigation() {
        this.$refs.navigation.drawerFlip()
      }
    }
  }
</script>