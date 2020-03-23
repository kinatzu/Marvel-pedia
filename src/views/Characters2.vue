<template>
<div class= "back" id="app">
  <v-app id="inspire2">
      
    
    <v-row>
        <div id="pagination">
        <v-btn id="backPage"
        to="/Characters"
          absolute
          left
        >
          BACK
        </v-btn>
      <v-btn id="nextPage"
          absolute
          right
          to="/Characters3"
        >
          NEXT
        </v-btn>
        </div>
      <v-col cols="12" sm="6" offset-sm="3">
        
        <!-- <v-card> -->
          <v-container fluid>

            <v-row>
              <v-col
                v-for="(hero, i) in heroes"
                :key="i"
                class="d-flex child-flex"
                cols="4"
              >
              
                  <router-link  :to="'/character/' + hero.id">
                <v-card flat tile class="d-flex">
                  <v-img class="heroImg"
                    :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
                    
                    aspect-ratio="1"
                    
                 >
                  
                  <!-- <div class="heroName">{{hero.name}}</div> -->
                   
                  </v-img>
                </v-card>
                  </router-link>
                <!-- <v-progress-circular >{{hero.name}}</v-progress-circular> -->
              </v-col>
              
            </v-row>
          </v-container>
        <!-- </v-card> -->
      </v-col>
    </v-row>
  </v-app>
</div>
</template>

<script>
// import Heroe from "./components/Heroe";

export default {
  data() {
    return {
      url: "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100&offset=101",
      heroes: []
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.heroes = json.data.results));
    }
  },
  created() {
    this.getData();
  }
};
</script>


<style>

</style>