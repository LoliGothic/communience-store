
<template>
  <v-app>

      <div class="d-flex justify-center align-center column fill-height mt-3 mb-3">
        
        <v-card
          class="mx-auto mt-20"
          max-width="450"
        >
          <v-img class="visual"
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            :aspect-ratio="16/9"
          >
          
            <v-fab-transition
             >
                <v-btn
                  color="blue"
                  fab
                  dark
                  small
                  bottom
                  left
                  class="mt-3 ml-3"
                  to="my-card"
                >
                  <v-icon>mdi-content-save-all-outline</v-icon>
                </v-btn>
              </v-fab-transition>
          </v-img>


          <div class="details">

              <v-card-title class = "d-flex flex-column align-center justify-space-between">
                <div class="d-flex justify-between">
                <v-text-field
            v-model="message1"
            label="名前"
            clearable
            class="text-h4 mb-2"
          ></v-text-field>
                  
                </div>
                <div class="d-flex justify-space-between">
                     <v-text-field
                v-model="message1"
                label="ニックネーム"
                clearable
                class="text-h6 mb-2 font-weight-regular grey--tex"
          ></v-text-field>
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
              </div>

                <div> 
                   <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="自己紹介の編集"
      value="This is clearable text."
      style="width: 450px;"
    ></v-textarea>
                </div>
              </div>

              <v-divider class="mt-6 mx-4"></v-divider>

              <v-card-text>

                <v-chip
                  class="mr-2 mb-2"
                >
                  <v-icon left>
                    mdi-domain
                  </v-icon>
                  大学
                </v-chip>
                <v-chip class="mr-2 mb-2">
                  <v-icon left>
                    mdi-school
                  </v-icon>
                学年
                </v-chip>
                <v-chip class="mr-2 mb-2"
                >
                  <v-icon left>
                    mdi-school-outline
                  </v-icon>
                  専門
                </v-chip>
                <v-chip class="mr-2 mb-2">
                  <v-icon left>
                    mdi-baseball-bat
                  </v-icon>
                サークル
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

          </div>

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
          items: [{ title: 'サッカー'}, {title: 'ゲーム'}, {title: '映画'}],
          title: '趣味',
        },
       ],
      items_2: [
        {
          action: 'mdi-account-supervisor-outline',
          items: [{ title: 'マリー'}, {title: 'トム'}, {title: 'ミア'}],
          title: '親しい友だち',
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
  v-textarea{
    width: 450px;
  }

</style>