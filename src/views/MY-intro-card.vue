
<template>
  <v-app>

      <div class="d-flex justify-center align-center column fill-height mt-3 mb-3">
        
        <v-card
          class="mx-auto mt-20"
          max-width="450"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            :aspect-ratio="16/9"
          >
          </v-img>
          <v-card-title class = "d-flex flex-column align-center justify-space-between">
            <div class="d-flex justify-between">
            <div class="text-h4 mb-2">
              My name is here.
            </div>
              <v-btn
          class="ma-2"
          outlined
          x-small
          fab
          color="indigo"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
            </div>
            <div class="d-flex justify-space-between">
                <div class="text-h6 font-weight-regular grey--text">
                  Nickname
                </div>
                <v-btn
              class="ma-2"
              outlined
              fab
              color="indigo"
              height="25" width="25"
            >
              <v-icon  size = "15">mdi-pencil</v-icon>
            </v-btn>

            </div>
            
          </v-card-title>
          <div
            class="px-4 grey--text"

          >
          <div class="d-flex justify-space-between "
          >
            <v-avatar
              class="ml-2 mr-4"
            >
              📣 🗣
            </v-avatar>
                <v-btn
              class="ma-2"
              outlined
              fab
              color="indigo"
              height="25" width="25"
            >
              <v-icon  size = "15">mdi-pencil</v-icon>
            </v-btn>


          </div>

            <div> **Write some comments for your friends! For example...** <br>
              Hello! This is John. I'm a Sophomore in XX University. My major is tech, and I relally love pragramming. Please get along with me!</div>
          </div>

          <v-divider class="mt-6 mx-4"></v-divider>

          <v-card-text>
            <div class="d-flex justify-end">

            <v-btn
              class="ma-2"
              outlined
              fab
              color="indigo"
              height="25" width="25"
            >
              <v-icon  size = "15">mdi-pencil</v-icon>
            </v-btn>
            </div>
            <v-chip
              class="mr-2 mb-2"
            >
              <v-icon left>
                mdi-domain
              </v-icon>
              University
            </v-chip>
            <v-chip class="mr-2 mb-2">
              <v-icon left>
                mdi-school
              </v-icon>
            Grade
            </v-chip>
            <v-chip class="mr-2 mb-2"
            >
              <v-icon left>
                mdi-school-outline
              </v-icon>
              Major
            </v-chip>
            <v-chip class="mr-2 mb-2">
              <v-icon left>
                mdi-baseball-bat
              </v-icon>
            Club activity
            </v-chip>
            <v-list>
      <v-list-group
        v-for="item in items_1"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
     <v-list>
      <v-list-group
        v-for="item in items_2"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
          </v-card-text>
        </v-card>
      </div>
      
      <v-footer color="gray" dark app class ="footer d-flex justify-center">
      Copyright © 2021 Teamdevdev. All Rights Reserved.
    </v-footer>
      

  </v-app>
</template>

<script>
  export default {
    methods: {
      alarm () {
        alert('Turning on alarm...')
      },
      blinds () {
        alert('Toggling Blinds...')
      },
      lights () {
        alert('Toggling lights...')
      },
    },
     data: () => ({
      items_1: [
        {
          action: 'mdi-account-heart-outline',
          items: [{ title: 'Soccer'}, {title: 'Game'}, {title: 'Movie'}],
          title: 'Favorits',
        },
       ],
      items_2: [
        {
          action: 'mdi-account-supervisor-outline',
          items: [{ title: 'Marie'}, {title: 'Tom'}, {title: 'Mia'}],
          title: 'Close Friends',
        },
       
        
      ],
       
    }),
  }
</script>

<style>
  .footer{
    font-size: 0.8rem;
    font-weight: light;
  }

</style>