<template>
<div id="app">
  <v-app id="inspire3">
    <v-dialog
        v-model="dialog"
        width="250"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            
            v-on="on"
            id="searcherSeries" to="/Series"
                  color="red darken-2"
                  
                  x-small
                  fixed
                  top
                  left
                  fab
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
  
        <v-card>
         
          
            <v-text-field  id="searcher"
            v-model="search"
            dense
            color="transparent"
            
          ></v-text-field>
         
  
          <!-- <v-divider></v-divider> -->
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="black"
              text
              @click="dialog = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <v-card v-for="(serie, i) in filteredseries"
                :key="i"
      class="mx-auto elevation-20"
      max-width="330"
      outlined
      id="totalcards"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div id="cardTitles" class="overline mb-4">{{serie.startYear}}</div>
          <v-list-item-title id="cardTitles2" class="headline mb-1">{{serie.title}}</v-list-item-title>
          <v-list-item-subtitle>Data provided by Marvel. © 2020 MARVEL</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          
        ><v-img :src="serie.thumbnail.path + '.' + serie.thumbnail.extension"></v-img></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn id="moreDet" :to="'/comic/' + serie.id">More details</v-btn>
      </v-card-actions>
    </v-card>
    
  </v-app>
</div>
</template>


<script>

export default {
  data() {
    return {
      dialog: false,
      search: "",
      url: "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      series: [],
      Comic: this.$route.params.comic
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.series = json.data.results));
    }
  },
  created() {
    this.getData();
  },
  computed: {
    filteredseries() {
        return this.series.filter(serie => {return serie.title.toLowerCase().includes(this.search.toLowerCase());
    });
   }
  }
};
</script>

<style>
/* .coverComic{
    width: 90%;
} */
.v-image__image, .v-image__placeholder {
  width: 113% !important;
}
.title{
  color: black !important;
}
 #cardTitles{
   font-size: 14px !important;
 }
 #cardTitles2{
   font-size: 16px !important;
   font-weight: bold;
 }

#totalcards{
margin-top: 10px;
background-color: rgba(255, 255, 255, 0.911);
/* background-image: url(https://image.freepik.com/vector-gratis/fondo-abstracto-blanco-estilo-papel-3d_23-2148403778.jpg); */
background-image: url(https://i.imgur.com/1grLWne.jpg);
background-size: 330px;
border-radius: 1% !important;
/* max-width: 78%!important; */
/* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 47%, rgba(0,0,0,1) 100%); */
}
#inspire3 > div {
  background: rgba(41, 40, 40, 0.904);
  padding-top: 10px;
}
#searcher{
  color: black !important;
  margin-top: 25px;
  margin-left: 10px;
}
#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div.v-input.v-input--dense.theme--light.v-text-field.v-text-field--is-booted > div{
  padding-left: 15px;
  padding-right: 15px;
}
#moreDet{
  background-color: rgba(218, 218, 218, 0.678) !important;
  font-family: 'Roboto Condensed', sans-serif !important;
  color: black !important;
  font-size: 10px !important;
  height: 30px !important;
  border-radius: 4% !important;
}
#totalcards > div.v-card__actions > a > span {
  color: black !important;
  /* background-color: rgba(204, 198, 198, 0.911)!important; */
  
}
#earching{
  background-color: white !important;
}
/* input, select, textarea{
  background-color: rgba(255, 255, 255, 0.685) !important;
  max-width: 30% !important;
  margin-left: 16px;
  border-radius: 5% !important;
  font-family: 'Roboto Condensed', sans-serif !important;
} */
#app > div.col-sm-6.col-md-4.col-12 {
  padding-top:15px;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  background: rgba(29, 28, 28, 0.904);
  color: white !important;
}
#app > div.col-sm-6.col-md-4.col-12 > div {
  color: white !important;
  font-family: 'Roboto Condensed', sans-serif !important;
}
#input-27{
  color: white !important;
  font-family: 'Roboto Condensed', sans-serif !important;
}
.theme--light.v-input, .theme--light.v-input input, .theme--light.v-input textarea { 
  color: white !important;
  font-family: 'Roboto Condensed', sans-serif !important;
}
#searcherSeries{
  margin-top: 40px;
}
</style>