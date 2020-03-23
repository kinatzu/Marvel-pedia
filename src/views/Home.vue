<template>
<div id="app">
  <v-app id="inspire">
        
          <v-img src="@/assets/spider2.jpg">
          <v-btn class="button"
          color="white"
          text
        >
          <router-link to="/Characters" id="homeTitles">CHARACTERS</router-link>
        </v-btn></v-img>
          
          <v-img src="@/assets/catw.jpg">
          <v-btn class="button"
          color="white"
          text
        >
          <router-link to="/Series" id="homeTitles">SERIES</router-link>
        </v-btn>
          </v-img>
          <v-img src="@/assets/ciclo.jpg">
          <v-btn class="button"
          color="white"
          text
        >
          <router-link to="/MComics" id="homeTitles">COMICS</router-link>
        </v-btn></v-img>
    
  </v-app>
</div>
</template>

<script>

export default {
 
}
</script>

<style>

</style>

