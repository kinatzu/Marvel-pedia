import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import GAuth from 'vue-google-oauth2'
import firebase from "firebase/app";
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


import "firebase/database";

Vue.config.productionTip = false

const gauthOption = {
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

const configOptions = {
  apiKey: "AIzaSyAkLInktJ4qPss9MeMntStqh96nGuNtWaI",
    authDomain: "marvel-chat-35c2a.firebaseapp.com",
    databaseURL: "https://marvel-chat-35c2a.firebaseio.com",
    projectId: "marvel-chat-35c2a",
    storageBucket: "marvel-chat-35c2a.appspot.com",
    messagingSenderId: "577501829856",
    appId: "1:577501829856:web:9eb58c9f0cbacb7c09ce85"
};

// firebase.initializeApp(configOptions);
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
