<template id="cuerpo">
<div id="app">
<v-app id="inspire">
    <v-card
      class="mx-auto"
      
    >
      <v-card
        v-if="comic"
        dark
        flat
      ><v-btn id="backbutton" to="/MComics"
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
          :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
          gradient="to top, rgba(0,0,0,.55), rgba(0,0,0,.55)"
          aspect-ratio="1"
        >
          <v-container fill-height>
            <v-layout align-center>
              <div class="heroname">{{comic.title}}</div>
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
            icon="mdi-format-align-justify"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>PAGES</strong>
              </v-flex>
              <v-flex>
                <div class="caption mb-2">{{comic.pageCount}}</div>
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
                <div class="caption mb-2" v-for="creators in comic.creators.items" :key="creators.name">{{creators.name}}: <span id="roleW">{{creators.role}}</span></div>
                
                <a target="_blank" href="https://en.wikipedia.org/wiki/Category:Marvel_Comics_writers">
                <v-avatar>
                  <v-img
                    src="https://i.pinimg.com/originals/d5/66/a7/d566a74e8bedbb55751c8f013f155b83.jpg"
                  ></v-img>
                </v-avatar>
                </a>
                <a target="_blank" href="https://www.marvel.com/comics/creators">
                <v-avatar>
                  <v-img
                    src="https://3.bp.blogspot.com/-HBgg6496Ds0/WRR81MavDcI/AAAAAAABe9M/PzhrNOgLNnMRrG32eU27Fovp1HVHiceHwCLcB/s1600/mejores-comics-de-punisher%2B%25281%2529.jpg"
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
                
                <div v-for="stories in comic.stories.items" :key="stories.name" class="caption mb-2">{{stories.name}}</div>
                
              </v-flex>
          </v-timeline-item>
  
          <!-- <v-timeline-item
            color="grey darken-3"
            small
          >
            <v-layout wrap pt-4>
              <v-flex xs3>
                <strong>VARIANTS</strong>
              </v-flex>
            </v-layout>
              <v-flex>
                <div v-for="variants in comic.variants.items" :key="variants" class="caption mb-2">{{variants}}</div>
                
                <v-avatar>
                  <v-img
                    src="https://i.pinimg.com/600x315/c2/76/77/c27677fb169570dc628f1d3f69665f6c.jpg"
                  ></v-img>
                </v-avatar>
              </v-flex>
          </v-timeline-item> -->
          <v-timeline-item
            fill-dot="fillDot"
            color="grey darken-3"
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
            <a target="_blank" :href="comic.thumbnail.path + '.' + comic.thumbnail.extension">
                <div><img  class="cover" :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" aspect-ratio="1" width="60%"></div></a>
          </v-timeline-item>
          <v-timeline-item
            fill-dot="fillDot"
            color="red darken-2"
            big
            icon="mdi-account-multiple"
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <strong>HEROES</strong>
              </v-flex>
            </v-layout>
              <v-flex>
                <div v-for="characters in comic.characters.items" :key="characters.name" class="caption mb-2">{{characters.name}}</div>
              </v-flex>
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
      url: "https://gateway.marvel.com:443/v1/public/comics/"+this.id+"?ts=1&apikey=f3b62a0a76a7a780416650daf360767f&hash=5ba64089e8f0769b02e0c60ee67048d0&limit=100",
      comic: null
    };
  },
  methods: {
    getData() {
      fetch(this.url)
      .then(data => data.json())
      .then(json => (this.comic = json.data.results[0]));
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>

</style>