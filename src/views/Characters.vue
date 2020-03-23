<template>
<div class= "back" id="app">
  <v-app id="inspire2">
      
    
    <v-row><div id="pagination">
      <v-btn id="nextPage"
          absolute
          right
          to="/Characters2"
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
                  <v-hover v-slot:default="{ hover }"
          open-delay="10">
                <v-card flat tile class="d-flex" :elevation="hover ? 20 : 4">
                  <v-img class="heroImg"
                    :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
                    aspect-ratio="1"
                    
                 >
                  
                  <!-- <div class="heroName">{{hero.name}}</div> -->
                   
                  
                  </v-img>
                </v-card>
                </v-hover>
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
      url: "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      heroes: [],
      Character: this.$route.params.character
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
/* .black{
  background: black !important;
}
.theme--light.v-application {
    background: #202020dc !important;
    color: white !important;
} */
.v-image__image, .v-image__placeholder {
  width: 113% !important;
   
}
#nameCard {
  font-size: 10px;
}
#inspire2 > div > div{
  background: rgba(41, 40, 40, 0.904);
  padding-top: 15px;
}
#nextPage, #backPage{
  background-color: rgb(226, 224, 224) !important;
  font-family: 'Roboto Condensed', sans-serif !important;
  color: black !important;
  font-size: 10px !important;
  height: 30px !important;
  border-radius: 4% !important;
}
#inspire2 > div > div > div.col-sm-6.offset-sm-3.col-12 {
    padding-top: 20px;
}
a{
  color: #111
}

.photo{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
}

.photo img{
  width: 200px;
  height: 280px;
  object-fit: cover;
  filter: grayscale(100%) contrast(120%);
  box-shadow: 10px 15px 25px 0 rgba(0,0,0,.2);
  display: block;
  transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-top: -10px;
}

.photo:hover img{
  box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
}

.photo .glow-wrap{
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  margin-top: -10px;
}

.photo .glow{
  display: block;
  position:absolute;
  width: 40%;
  height: 200%;
  background: rgba(255,255,255,.2);
  top: 0;
  filter: blur(5px);
  transform: rotate(45deg) translate(-450%, 0);
  transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.photo:hover .glow{
  transform: rotate(45deg) translate(450%, 0);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.photo:hover img,
.photo:hover .glow-wrap{
  margin-top: 0;
}

h1{
  position: absolute;
  z-index: 1;
  transform: translate(-25%, -65%);
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  line-height: 1.2;
}
</style>