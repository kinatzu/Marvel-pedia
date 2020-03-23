<template id="cuerpo">
<div id="app">
 
    <v-card
    v-if="hero"
      class="mx-auto"
    >
    
      <v-card 
        
        dark
        flat
      >
       <v-btn id="backbutton" to="/Characters"
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
          :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container fill-height>
            <v-layout align-center>
              <div class="heroname">{{hero.name}}</div>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <!-- <v-expansion-panels
        :accordion="accordion"
        :flat="flat"
        :hover="hover"
        
      >
        <v-expansion-panel
          v-for="comic in hero.comics.items" :key="comic.name"
        >
          <v-expansion-panel-header>COMICS</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{comic.name}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-book"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <router-link  to="/MComics"><strong>COMICS</strong></router-link>
              </v-flex>
              <v-flex id="comicsBox">
              </v-flex>
            </v-layout>
            
                <div v-for="comic in hero.comics.items" :key="comic.name" class="caption mb-2">{{comic.name}}</div>
               <a target="_blank" href="https://www.marvel.com/search?limit=20&content_type=comics&offset=0&query=">
                <v-avatar>
                  <v-img
                    src="https://i.pinimg.com/600x315/c2/76/77/c27677fb169570dc628f1d3f69665f6c.jpg"
                  ></v-img>
                </v-avatar>
                </a>
          </v-timeline-item>
  
          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
            big
            icon="mdi-television"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <router-link  to="/Series"><strong>SERIES</strong></router-link>
              </v-flex>
              <v-flex>
              </v-flex>
            </v-layout>
                <div v-for="serie in hero.series.items" :key="serie.name" class="caption mb-2">{{serie.name}}</div>

                  <a target="_blank" :href="hero.urls[1].url">
                <v-avatar>
                  <v-img
                    :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
                  ></v-img>
                </v-avatar>
                </a>
                <a target="_blank" href="https://www.marvel.com/">
                <v-avatar>
  
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
                  ></v-img>
                </v-avatar>
                </a>
                <v-avatar>
                  <v-img
                    src=""
                  ></v-img>
                </v-avatar>
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
              <v-flex>
                
              </v-flex>
            </v-layout>
                <div v-for="stories in hero.stories.items" :key="stories.name" class="caption mb-2">{{stories.name}}</div>
          </v-timeline-item>

          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
            big
            icon="mdi-link-variant"
          >
            <v-layout wrap pt-4>
              <v-flex xs3>
                <strong>LINKS</strong>
              </v-flex>
              <v-flex>
                
              </v-flex>
            </v-layout>
                <div class="caption mb-2"><a id="links" target="_blank" :href="hero.urls[0].url">BIO</a></div>
                <div class="caption mb-2"><a id="links" target="_blank" :href="hero.urls[1].url">Comic details</a></div>
          </v-timeline-item>
  
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-map-marker-multiple"
          >
            <v-layout wrap pt-4>
              <v-flex xs3>
                <strong>EVENTS</strong>
              </v-flex>
              <v-flex>
              </v-flex>
            </v-layout>
                <div class="caption mb-2">Comic Con California</div>
                <div class="caption mb-2">Comic Con Florida</div>
                  <a target="_blank" href="https://www.comic-con.org/">
                <v-avatar>
                  <v-img
                    src="https://seeklogo.com/images/S/San_Diego_Comic_Con_International-logo-A081CB2D60-seeklogo.com.png"
                  ></v-img>
                </v-avatar>
                </a>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
  props:["id"],
  data() {
    return {
      e6: 1,
      url: "https://gateway.marvel.com:443/v1/public/characters/"+this.id+"?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      hero: null
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.hero = json.data.results[0]));
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.v-card {
  border-radius: 0% !important;
}
#backbutton{
  margin-top: 30px;
}
.py-0{
  color: rgb(75, 75, 75) !important;
  
  
}


.heroname{
  font-family: 'Roboto Condensed', sans-serif !important;
  font-size: 45px;
}

#inspire{
  font-family: 'Roboto Condensed', sans-serif !important;
  /* font-size: 40px !important; */
  
}


#links{
  color: rgb(75, 75, 75) !important;
}
strong{
  color: rgba(0, 0, 0, 0.877) !important;
  font-size: 14px;
}

</style>