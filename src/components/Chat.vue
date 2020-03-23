<template id="generalChat">
  <div id="hello">
      <v-col sm="6">
    <h1>{{ msg }}</h1>
    
    <div id="loginG" v-if="!auth">
      <v-btn class="ma-2" @click="googleLogin"  color="error"><v-icon>mdi-google-glass</v-icon>Sign in with Google</v-btn>
      
    </div>
    <div id="topChat" v-if="auth">
      <!-- <v-btn id="chatbuttons" to="/"
                  color= "#202020"
                  depressed
                  x-small
                  absolute
                  bottom
                  right
                  fab
                > -->
                  <!-- <v-icon>mdi-reply</v-icon></v-btn> -->
     <v-btn id="chatbuttons"
                  color="red"
                  depressed
                  x-small
                  absolute
                  top
                  right
                  fab
@click="logOut"
                >
                  <v-icon>mdi-close</v-icon></v-btn>
        <!-- <div><v-btn id="logoutBut" depressed small color="error" @click="logOut">Log out</v-btn></div> -->
        <!-- <div><v-icon id="logoutBut" @click="logOut" color="black">mdi-close-circle-outline</v-icon></div> -->
        
      <!-- <button @click="like(1)">Like</button> -->
      <div id="topID">
        <!-- <h3>{{auth.name}}</h3> -->
        <img :src="auth.avatar" id="avatarChat" alt="profile image" /><span id="topName">{{auth.name}}</span>
        <!-- <div>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</div> -->
        <!-- <div><v-btn depressed small color="error" @click="logOut">Log out</v-btn></div> -->
      </div>
      <div class="message">
        <ul v-chat-scroll="{always: false, smooth: true}">
          <div class="message" v-for="(v,k,i) in messages" :key="i+'msg'">
            <div id="messageBlock">
            <img id="avatar2" :src="v.user.avatar" alt="avatar" /><strong class="nameChat">{{v.user.name}}</strong></div>
            
            <!-- <p>
              <strong class="nameChat"><span>{{v.user.name}}</span></strong>
              </p> --><section class="discussion">
                <p class="bubble sender last"
>{{v.msg}}<span id="date">{{ v.msgtime | moment("dddd, h:mm a") }}</span></p></section>
         </div>
        </ul>
      <!-- <div class="message" v-for="(v,k,i) in messages" :key="i+'msg'">
        <img id="avatar2" :src="v.user.avatar" alt="avatar" />
        <span id="usersName">{{v.user.name}}</span>  
        <div id="messageWindows">
        <p id="messages">
          {{v.msg}}
        </p>
        </div>
        
      <!-- </div> -->
      </div>
      <div class='inputChat'>
      <v-text-field  id="searcher"
            v-model="message"
            keyup.enter="sendMsg"
            dense
            color="green"
            
          ></v-text-field>
      <!-- <i id="sendIcon" @click="sendMsg" class="mdi mdi-send"></i> -->
      <!-- <v-btn
                  
                  @click="sendMsg"
                  small
                 depressed
                  fab
                > -->
                  <v-btn  x-small fab color= "green" depressed><v-icon @click="sendMsg">mdi-send</v-icon></v-btn></div>
    
      <div v-for="(v,k,i) in likes" :key="i" class="like">
        
        <p>
          <span>{{v}}</span>
        </p>
      </div>
    </div>
    </v-col>
  </div>
</template>

<script>
import db from "@/firebase";
export default {
  name: "Chat",
  props: {
    msg: String
  },
  data() {
    return {
      message: "",
      messages: [],
      auth: null,
      likes: []
    };
  },
  watch: {
    // auth() {
    //   this.getLikes();
    // }
  },
  methods: {
    sendMsg() {
      let newDate = new Date().toGMTString();
      let newmsg = { user: this.auth, msg: this.message, msgtime: newDate };
      console.log(newmsg)
      db.database()
        .ref()
        .child("posts-test")
        .push(newmsg);
      this.message = "";
    },
    getPosts() {
      let that = this;
      db.database()
        .ref("posts-test/")
        .on("value", snapshot => {
          console.log(snapshot.val());

          that.messages = snapshot.val();
        });
    },
    googleLogin() {
      let that = this;
      const provider = new db.auth.GoogleAuthProvider();
      db.auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);
          
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
            id: result.user.uid
          };
          console.log(user);
          that.auth = user;

          db.database()
            .ref("users/" + result.user.uid)
            .set(user);

          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          
          var credential = error.credential;
          // ...
        });
    },
    logOut() {
      let that = this;
      db.auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          that.auth = null;
        })
        .catch(function(error) {
          // An error happened.
        });
    },
    like(value) {
      db.database()
        .ref("productsCode/" + this.auth.id)
        .push(value + 1);
    },
    getLikes() {
      db.database()
        .ref("productsCode/" + this.auth.id)
        .on("value", snapshot => {
          console.log(snapshot.val());

          this.likes = snapshot.val();
        });
    }
  },
  computed: {
  createdAtDisplay() {
    return moment(todo.created_at).format('YYYY-MM-DD h:mm A');
  }
},
directives: {
    colors: {
      inserted(el) {
//the current dom element

        el.style.backgroundColor = `#${(
          (Math.random() * 0xffffff) <<
          0
        ).toString(16)}`;
      //  console.log(((Math.random() * 0xffffff) << 0).toString(16));
      }
    }
  },
  created() {
    this.getPosts();
    db.auth().onAuthStateChanged((user) =>{
  if (user) {
    // User is signed in.
  this.auth ={
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            id: user.uid
          };
  
  } else {
    // No user is signed in.
    console.log("User not logged in!!!");
    
  }
});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 125px;
  cursor: pointer;
}
.msg img {
  width: 25px;
}
ul {
  height: 41em;
  overflow: scroll;
  /* background-color: rgba(255, 255, 255, 0.404); */
}
.inputChat{
  /* background-color: rgba(255, 255, 255, 0.753) !important; */
  border-radius: 1%;
  /* padding-bottom: px; */
  /* margin-top: 5px; */
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: baseline;
}
#avatar2{
  border-radius: 50%;
  margin-right: 5px;
  /* margin-top: 10px; */
  width: 10% !important;
}
.nameChat{
  font-size: 15px;
  color: rgb(87, 84, 84) !important;
}
#topChat{
  /* background-color: black !important!; */
}
#date{
  font-size: 11px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.356);
}
#avatarChat{
  /* margin-top: 15px; */
    border-radius: 50%;
    width: 20%;
}
#chatbuttons{
  margin-top: 20%;

}
#hello{
    /* background: rgba(41, 40, 40, 0.904); */
    /* background-image: url(https://media.playstation.com/is/image/SCEA/marvels-avengers-normal-hero-background-01-ps4-us-10jul19?$native_nt$); */
    background-image:url(https://i.redd.it/qwd83nc4xxf41.jpg);
    background-size: cover;
    font-size: 14px;
    /* background-color: rgb(54, 51, 51); */
    color: black !important;
    padding-top: 15px;
    /* font-family: 'Assistant', sans-serif !important; */
    font-family: 'Roboto Condensed', sans-serif !important;
}
#topName{
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
}
#messages{
  /* font-family: 'Roboto Slab', serif !important; */
  
  /* background-color: rgba(255, 255, 255, 0.295); */
  margin-left: 15%;
  /* padding-left: 5px;
  padding-right: 5px; */
  margin-right: 15%;
  border-radius: 2%;
  padding-top: 12px;
  padding-bottom: 12px;
  
  
}
#sendIcon{
  color: black !important;
}
#messagescard{
  /* background-color: rgba(128, 128, 128, 0.253);
  border-radius: 20% !important; */
}


#chatButtons{
    width: 10%;
}
#logoutBut{
  margin-bottom: 15px;
}
/* #sendingText{
  margin-bottom: 15px;
  margin-top: 15px;
  width: 70%;
  color: black !important;
} */
#loginG{
  padding-bottom: 200%;
  display: flex;
  justify-content: center;
  
  margin-top: 80px;
}
#usersName{
  /* margin-bottom: 10px; */
}
#input-36 {
  color: black !important;
}
.theme--light.v-input input {
  color: black !important;
}
#topID{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
#hello > div > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted{

  /* font-family: 'Assistant', sans-serif !important; */
  font-family: 'Roboto Condensed', sans-serif !important;

}
.messagebox{
  font-size: 15px;
  
  /* margin-left: 15%; */
  margin-right: 15%;
  /* border-radius: 3%; */
  /* border-width: 1px; */
  /* border-color: rgba(0, 0, 0, 0.075); */
  /* border-style: solid; */
  padding-top: 12px;
  padding-bottom: 12px;
}
#messageBlock{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: ;
}
.discussion {
	max-width: 600px;
	margin: 0 auto;
	
	display: flex;
	flex-flow: column wrap;
}

.discussion > .bubble {
	border-radius: 1em;
	padding: 0.25em 0.75em;
	margin: 0.0625em;
	max-width: 90%;
}

.discussion > .bubble.sender {
	align-self: flex-start;
	background-color: rgba(218, 237, 250, 0.863);
	color: black !important;
}
.discussion > .bubble.recipient {
	align-self: flex-end;
	/* background-color: #efefef; */
}

.discussion > .bubble.sender.first { border-bottom-left-radius: 0.1em; }
.discussion > .bubble.sender.last { border-top-left-radius: 0.1em; }
.discussion > .bubble.sender.middle {
	border-bottom-left-radius: 0.1em;
 	border-top-left-radius: 0.1em;
}

.discussion > .bubble.recipient.first { border-bottom-right-radius: 0.1em; }
.discussion > .bubble.recipient.last { border-top-right-radius: 0.1em; }
.discussion > .bubble.recipient.middle {
	border-bottom-right-radius: 0.1em;
	border-top-right-radius: 0.1em;
}
</style>
