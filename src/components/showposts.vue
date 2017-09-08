<template>
    <div style="margin-top:20px;width:100%;">
      <div>
<<<<<<< HEAD
          <newpost></newpost>
=======
          <NewPost></NewPost>
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
      </div>
      <md-card v-for="post in posts"
                style="margin-top:20px;"
                >
<<<<<<< HEAD
              <md-card-header>
              <md-card-header-text>
                <div class="md-title" v-if="post.title!=''">
                  <router-link :to="'/success/'+post.id">
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
                                :to="'success/'+post.id"
=======
          <md-card-header>
          <md-card-header-text>
            <div class="md-title" v-if="post.title!=''">
              <router-link :to="'post/'+post.id">
                  {{post.title}}
              </router-link>
            </div>
            <span class="md-caption">{{ getDomain(post.link) }}</span>
            <div class="md-subhead">{{post.onDate | formatDate}}</div>
          </md-card-header-text>
          </md-card-header>
          <!-- <md-card-media>
          <img src="https://i.imgur.com/iThrRGP.jpg" alt="people">
          </md-card-media> -->
          <md-card-content style="padding-bottom:0;">
              <!-- {{post.description}} -->
              <!-- <md-divider></md-divider> -->
          </md-card-content>
          <md-card-actions>
            <!-- <md-button>Action</md-button> -->
            <router-link tag="md-button"
                                :to="'post/'+post.id"
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
                                class=" md-primary "
                                style="margin:0;"
                                >
                                Comment
                  </router-link>
<<<<<<< HEAD
              </div>
=======
          </md-card-actions>
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
          </md-card>
    </div>
</template>
<script>
import axios from 'axios'
<<<<<<< HEAD
import newpost from './newpost.vue'
export default{
  components:{
    'newpost':newpost
=======
import NewPost from './newpost.vue'
import urlparse from 'url-parse'

import _fdb from './../db/firedb.js'
const fdb = _fdb()

export default{
  components:{
    'NewPost': NewPost
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
  },
  data () {
    return {
      posts:[],
    }
  },
  created() {

<<<<<<< HEAD

   }
=======
    console.log(this.$route)
    const feed = fdb.getFeed()
    feed.then(data => {
      for (let key in data) {
        const post = data[key]
        post.id = key
        this.posts.push(post)
      }
    })
  },
  methods: {
    getDomain (link) {
      const url = urlparse(link, true)
      return url.host
    }
  }
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
}
</script>
