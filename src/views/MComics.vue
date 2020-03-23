<template>
<div id="app">
    <!-- <v-col cols="12" sm="6" md="4">
          <v-text-field  id="searcher"
            v-model="search"
            dense
            color="white"
            label="Search by title"
          ></v-text-field>
        </v-col> -->
  <v-app id="inspire3">
    <v-card v-for="(comic, i) in comics"
                :key="i"
      class="mx-auto elevation-20"
      max-width="330"
      outlined
      id="totalcards"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <!-- <div id="cardTitles" class="overline mb-4"></div> -->
          <v-list-item-title id="cardTitles2" class="headline mb-1">{{comic.title}}</v-list-item-title>
          <v-list-item-subtitle>Data provided by Marvel. © 2020 MARVEL</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          
        ><v-img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"></v-img></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn id="moreDet" :to="'/mcomic/' + comic.id">More details</v-btn>
      </v-card-actions>
    </v-card>
    
  </v-app>
</div>
</template>


<script>

export default {
  data() {
    return {
      search: "",
      url: "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      comics: []
    //   Comic: this.$route.params.comic
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.comics = json.data.results));
    }
  },
  created() {
    this.getData();
  },
  computed: {
    filteredseries() {
        return this.comics.filter(serie => {return serie.title.toLowerCase().includes(this.search.toLowerCase());
    });
   }
  }
};
</script>

<style>
#totalcards2{
margin-top: 10px;
background-color: rgba(255, 255, 255, 0.911);
/* background-image: url(https://image.freepik.com/vector-gratis/fondo-abstracto-blanco-estilo-papel-3d_23-2148403778.jpg); */
/* background-image: url(https://image.freepik.com/vector-gratis/fondo-abstracto-blanco-estilo-papel-3d_23-2148408028.jpg); */

background-size: 335px;
/* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 47%, rgba(0,0,0,1) 100%); */
}
</style>