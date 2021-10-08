import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import RoomList from '../views/RoomList.vue'
import EventList from '../views/EventList.vue'
import CardList from '../views/CardList.vue'
import ParticipantsList from '../views/ParticipantsList.vue'
import Organizer from '../views/Organizer.vue'
import Participant from '../views/Participant.vue'
import Card_FRIENDS from '../views/FRIENDS-intro-card.vue'
import Card_MY from '../views/MY-intro-card.vue'
import Edit from '../views/Edit-page.vue'
import RoomForm from '../views/RoomForm.vue'
import RoomInvite from '../views/RoomInvite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/roomlist',
    name: 'RoomList',
    component: RoomList
  },
  {
    path: '/eventlist',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/cardlist',
    name: 'CardList',
    component: CardList
  },
  {
    path: '/participantslist',
    name: 'ParticipantsList',
    component: ParticipantsList
  },
  {
    path: '/organizer',
    name: 'Organizer',
    component: Organizer
  },
  {
    path: '/participant',
    name: 'Participant',
    component: Participant
  },
  {
    path: '/friends-card',
    name: 'friends-card',
    component:Card_FRIENDS
  },
  {
    path: '/my-card',
    name: 'my-card',
    component: Card_MY
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/roomform',
    name: 'RoomForm',
    component: RoomForm
  },
  {
    path: '/roominvite',
    name: 'RoomInvite',
    component: RoomInvite
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

