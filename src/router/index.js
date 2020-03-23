import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import Characters2 from '../views/Characters2.vue'
import Characters3 from '../views/Characters3.vue'
import Characters4 from '../views/Characters4.vue'
import Character from '../views/Character.vue'
import Comic from '../views/Comic.vue'
import Comics from '../views/Series.vue'
import MComics from '../views/MComics.vue'
import Mcomic from '../views/Mcomic.vue'
import Chat from '../components/Chat.vue'
// import Chat from '../components/Chat.vue'

Vue.use(VueRouter)
Vue.use(require('vue-moment'));


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mcomics',
    name: 'MComics',
    component: MComics
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/mcomic',
    name: 'Mcomic',
    component: Mcomic
  },
  // {
  //   path: '/chat',
  //   name: 'Chat',
  //   component: Chat
  // },
  {
    path: '/mcomic/:id',
    name: 'Mcomic',
    props: true,
    component: Mcomic
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: "character",
    props: true,
    component: Character 
  },
  {
    path: '/comic/:id',
    name: "comic",
    props: true,
    component: Comic 
  },
  {
    path: '/characters4',
    name: 'Characters4',
    component: Characters4
  },
  {
    path: '/characters2',
    name: 'Characters2',
    component: Characters2
  },
  {
    path: '/characters3',
    name: 'Characters3',
    component: Characters3
  },
  {
    path: '/series',
    name: 'Series',
    component: Comics
  },
  {
    path: '/character',
    name: 'Character',
    component: Character
  },
  {
    path: '/comic',
    name: 'Comic',
    component: Comic
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
