<template>
    <div style="margin-top:20px;width:100%;">
      <div>
          <authsucc></authsucc>
      </div>
      <md-card v-for="post in posts"
                style="margin-top:20px;"
                >
              <md-card-header>
              <md-card-header-text>
                <div class="md-title" v-if="post.title!=''">
                  <router-link :to="'/auth/success/'+post.id">
                      {{post.title}}
                  </router-link>
                </div>
                <div class="md-subhead">{{post.onDate | formatDate}}</div>
              </md-card-header-text>
              </md-card-header>

              <md-card-content style="padding-bottom:0;">
                  {{post.description}}
                  <md-divider></md-divider>
              </md-card-content>
              <md-card-media>
                <img src="https://i.imgur.com/iThrRGP.jpg" alt="people">
              </md-card-media>
              <div align="right">
                  <router-link tag="md-button"
                                :to="'/auth/success/'+post.id"
                                class=" md-primary "
                                style="margin:0;"
                                >
                                Comment
                  </router-link>
              </div>
          </md-card>
    </div>
</template>
<script>
import axios from 'axios'
import authsucc from './AuthSuccess.vue'
export default{
  components:{
    'authsucc':authsucc
  },
   data(){
     return{
          posts:[],
     }
   },
   created(){

     axios({
       method:'get',
       url:'https://avouer-c74ef.firebaseio.com/newpost.json',
       responseType:'stream'
      })
       .then((response)=> {
          var postsarray=[];
          console.log(response);
           for(let key in response.data){
              response.data[key].id=key
              postsarray.push(response.data[key]);
           }
           console.log(postsarray);
           this.posts=_.reverse(postsarray);
      });

   },
   methods:{

   }
}
</script>
