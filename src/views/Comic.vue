<template id="cuerpo">
<div id="app">
<v-app id="inspire">
    <v-card
      class="mx-auto"
      
    >
      <v-card
        v-if="serie"
        dark
        flat
      ><v-btn id="backbutton" to="/Series"
                  color="transparent"
                  
                  small
                  absolute
                  top
                  left
                  fab
                >
                  <v-icon>mdi-reply</v-icon></v-btn>
       <!-- <v-btn href="https://www.marvel.com/characters"
          target="_blank"
          absolute
          bottom
          color="#202020"
          left
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn> -->
        <v-img id="topImg"
          :src="serie.thumbnail.path + '.' + serie.thumbnail.extension"
          gradient="to top, rgba(0,0,0,.55), rgba(0,0,0,.55)"
          aspect-ratio="1"
        >
          <v-container fill-height>
            <v-layout align-center>
              <div class="heroname">{{serie.title}}</div>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-chevron-double-right"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>STARTED</strong>
              </v-flex>
              <v-flex>
                <div class="caption mb-2">{{serie.startYear}}</div>
                <!-- <v-avatar>
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Marvel%27s_The_Avengers_logo.svg"
                  ></v-img>
                </v-avatar> -->
              </v-flex>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
            big
            icon="mdi-pen"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>WRITER</strong>
              </v-flex>
            </v-layout>
              <v-flex class="creatorsBox">
                <div class="caption mb-2" v-for="creators in serie.creators.items" :key="creators.name">{{creators.name}}: <span id="roleW">{{creators.role}}</span></div>
                

                  <a target="_blank" href="https://en.wikipedia.org/wiki/Category:Marvel_Comics_writers">
                <v-avatar>
                  <v-img
                    src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/09/07142333/spidermanbio_portada.jpg"
                  ></v-img>
                </v-avatar>
                </a>
                <a target="_blank" href="https://www.marvel.com/comics/creators">
                <v-avatar>
                  <v-img
                    src="https://cdn.imgbin.com/8/8/9/imgbin-iron-man-black-and-white-drawing-line-art-ironman-marvel-iron-man-illustration-udycncCi6pXeyRD9dMAvuhDVC.jpg"
                  ></v-img>
                </v-avatar>
                </a>
              </v-flex>
          </v-timeline-item>
  
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-library"
          >
            <v-layout wrap pt-4>
              <v-flex xs3>
                <strong>STORIES</strong>
              </v-flex>
            </v-layout>
              <v-flex>
                
                <div v-for="stories in serie.stories.items" :key="stories.name" class="caption mb-2">{{stories.name}}</div>
                
              </v-flex>
          </v-timeline-item>
  
          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
            big
            icon="mdi-book"
          >
            <v-layout wrap pt-4>
              <v-flex xs3>
               <router-link  to="/MComics"><strong>COMICS</strong></router-link>
              </v-flex>
            </v-layout>
              <v-flex>
                <div v-for="comics in serie.comics.items" :key="comics.name" class="caption mb-2">{{comics.name}}</div>
                <a target="_blank" href="https://www.marvel.com/search?limit=20&content_type=comics&offset=0&query=">
                <v-avatar>
                  <v-img
                    src="https://i.pinimg.com/600x315/c2/76/77/c27677fb169570dc628f1d3f69665f6c.jpg"
                  ></v-img>
                </v-avatar>
                </a>
              </v-flex>
          </v-timeline-item>
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-hexagon-outline"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>COVER</strong>
              </v-flex>
              <v-flex>
                <!-- <v-avatar>
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Marvel%27s_The_Avengers_logo.svg"
                  ></v-img>
                </v-avatar> -->
              </v-flex>
            </v-layout>
            <a target="_blank" :href="serie.thumbnail.path + '.' + serie.thumbnail.extension">
                <div><img  class="cover" :src="serie.thumbnail.path + '.' + serie.thumbnail.extension" aspect-ratio="1" width="60%"></div></a>
          </v-timeline-item>
          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
            big
            icon="mdi-chevron-double-left"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>ENDED</strong>
              </v-flex>
              <v-flex>
                <div class="caption mb-2">{{serie.endYear}}</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-app>
</div>
</template>


<script>
export default {
  props:["id"],
  data() {
    return {
      e6: 1,
      url: "https://gateway.marvel.com:443/v1/public/series/"+this.id+"?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      serie: null
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.serie = json.data.results[0]));
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
#inspire > div > div{
  background: white;
}
.v-card {
  border-radius: 0% !important;
}

.py-0{
  color: rgb(75, 75, 75) !important;
}
.heroname{
  font-family: 'Roboto Condensed', sans-serif !important;
  font-size: 45px;
}
#roleW{
  font-style: italic;
}
#inspire{
  font-family: 'Roboto Condensed', sans-serif !important;
  /* font-size: 40px !important; */
}
#inspire > div > div > div.v-card__text.py-0 > div > div:nth-child(3) > div.v-timeline-item__body > div {
  max-width: 240px;
}
#inspire > div > div > div.v-card__text.py-0 > div > div:nth-child(4) > div.v-timeline-item__body > div {
  max-width: 240px;
}
.cover{
  /* border-radius: 50%; */
  border-style: solid;
}
#inspire > div > div > div.v-card__text.py-0 > div > div:nth-child(2) > div.v-timeline-item__body > div {
  max-width: 205px;
}


</style>