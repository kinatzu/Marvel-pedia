<template>
  <v-app id="inspire">
    <v-card
      color="darken1"
      flat
      tile
    >
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title class="titlebar"><span class="marvelt">MARVEL</span> <span class="wikit">pedia.</span></v-toolbar-title>
  
        <v-spacer></v-spacer>
          
        <v-btn icon>
          <button class="google-signin-button"><router-link to="/Chat"><v-icon>mdi-message-text-outline</v-icon></router-link></button>
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" temporary dark class="navbarmenu" src="@/assets/iron2.png">
        <v-content>
         <v-list-item-group
          active-class="grey--text text--accent-4">
          <v-list-item>
          <v-icon color="white">mdi-view-dashboard</v-icon><v-list-item-title><router-link to="/">  HOME</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
           <v-icon color="white">mdi-details</v-icon><v-list-item-title><router-link to="/Characters">  CHARACTERS</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-icon color="white">mdi-blur-radial</v-icon><v-list-item-title><router-link to="/Series">  SERIES</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-icon color="white">mdi-cube-outline</v-icon><v-list-item-title><router-link to="/MComics">  COMICS</router-link></v-list-item-title>
          </v-list-item>

          <!-- <v-list-item>
            <v-icon color="white">mdi-hops</v-icon><v-list-item-title><router-link to="/Chat">  CHAT</router-link></v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      <!-- </v-list> -->
      </v-content>
      </v-navigation-drawer>
    </v-card> 
      <router-view/>
  </v-app>
  
  
</template>

<script>

import Chat from "@/components/Chat.vue";


export default {
  name: 'App',
   components: {
    Chat
  },
  data() {
    return{
      drawer: false

    }
  }
};

// import GoogleSignInButton from 'vue-google-signin-button-directive'
// export default {
//   name: 'App',
//   directives: {
//     GoogleSignInButton
//   },
//   data: () => ({
//     clientId: 'Your_Google_Client-Id'
//   }),
//   methods: {
//     OnGoogleAuthSuccess (idToken) {
//       // Receive the idToken and make your magic with the backend
//     },
//     OnGoogleAuthFail (error) {
//       console.log(error)
//     }
//   }
// }
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
  background-color: #202020;
  color: white;
}
.marvelt{
  font-family: 'Fjalla One', sans-serif;
  font-size: 35px;
  font-weight: bold;
  padding: 2px 4px 2px 2px;
  
  background: #F50127;
}
.wikit{
  font-family: 'Roboto Slab', serif;
}
.mdi:before, .mdi-set {
  color: white;
}
.navbarmenu{
  
}
a.router-link-active, .v-application a {
  text-decoration: none;
  color: white !important;
}
.v-application, .grey--text {
  background: rgba(77, 75, 75, 0.178);
  
}
</style>
