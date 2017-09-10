<template>
    <div style="margin-top:20px;width:100%;">
      <md-card style="margin-top:20px;">
          <md-card-content>
                <md-list>
                    <md-list-item>
                        Post anything you want to,
                         there are no limits but we are pretty sure that you
                         know there is a limit.
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item style="display:block">
                          Share images via image links. e.g. copy link location
                          of any imgur images and paste it here.
                    </md-list-item>
                </md-list>
          </md-card-content>
      </md-card>
      <div>
          <NewPost></NewPost>
      </div>

      <md-card v-for="post in posts"
                style="margin-top:20px;"
                >
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title" v-if="post.title!=''">
                    <router-link :to="'/'+post.id">
                        {{post.title}}
                    </router-link>
                  </div>
                  <span class="md-body-2">{{post.ondate | formatDate}}</span>
                  <span class="md-caption">{{ getDomain(post.link) }}</span>
                  <!-- <div class="md-subhead">{{post.onDate | formatDate}}</div> -->

                </md-card-header-text>
              </md-card-header>

              <md-card-content >
                  {{post.description}}
                  <!-- <md-divider></md-divider> -->
              </md-card-content>
              <md-card-media v-if="post.link!=''">
                  <!-- <p>{{ post.link | getImgurImage}}</p>-->
                  <img :src="post.link" alt="people">
              </md-card-media>
              <md-card-actions align="right">
                  <router-link tag="md-button"
                              :to="'/'+post.id"
                              style="margin:0px 0"
                              >
                              {{ String(commentCount(post.comments))}}
                              {{ commentCount(post.comments)>1?'Comments':'Comment'}}
                  </router-link>
              </md-card-actions>
          </md-card>
    </div>
</template>
<script>
import axios from 'axios'
import NewPost from './newpost.vue'
import urlparse from 'url-parse'
import loda from 'lodash'
import _fdb from './../db/firedb.js'
const fdb = _fdb()

export default{
  components:{
    'NewPost': NewPost
  },
  data () {
    return {
      posts:[],
    }
  },
  created() {
    var postarray=[]
    axios({
      method:'get',
      url:'https://avouerreview.firebaseio.com/newpost.json',
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
  methods: {
    getDomain (link) {
      const url = urlparse(link, true)
      return url.host
    },
    commentCount (comments) {
      var cc = 0
      for (let key in comments) {
        cc += 1
      }
      return cc
    }
  }
}
</script>
