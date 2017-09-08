<template>
    <div style="margin-top:20px;width:100%;">
      <div>
          <NewPost></NewPost>
      </div>
      <md-card v-for="post in posts"
                style="margin-top:20px;"
                >
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
                                class=" md-primary "
                                style="margin:0;"
                                >
                                Comment
                  </router-link>
          </md-card-actions>
          </md-card>
    </div>
</template>
<script>
import axios from 'axios'
import NewPost from './newpost.vue'
import urlparse from 'url-parse'

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
}
</script>
