<template>
    <div>
      <md-card  style="margin-top:20px;">
          <md-card-header>
          <md-card-header-text>
            <div class="md-title" v-if="post.title!=''">
                  {{post.title}}
            </div>
            <span class="md-caption">{{ getDomain(post.link) }}</span>
            <div class="md-subhead">{{post.onDate | formatDate}}</div>
          </md-card-header-text>
          </md-card-header>
          <!-- <md-card-media>
          <img src="https://i.imgur.com/iThrRGP.jpg" alt="people">
          </md-card-media> -->
          <md-card-content>
              {{post.description}}
          </md-card-content>
          </md-card>
          <div style="margin-top:20px;padding:20px;">
              <md-input-container md-clearable>
                  <label>Description goes here</label>
                  <md-textarea v-model="comment" ></md-textarea>
              </md-input-container>
              <md-button @click="addNewComment">Comment</md-button>
              <!--<md-card v-for="comments in post.comments"
                       style="margin-top:20px;"
                       >
                <md-card-content>
                    {{comments}}
                </md-card-content>
              </md-card>-->
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import _fdb from './../db/firedb.js'

const fdb = _fdb()

export default{
  name: 'Post',
  props: ['postId'],
  data(){
    return {
      post: {},
      comment: ""
    }
  },
  methods: {
    addNewComment () {
      const commentObj = {
        ondate: new Date(),
        title: comment
      }
      fdb.addNewComment(postId, commentObj).then(resp => {
        console.log(resp)
      })
    }
  },
  created(){
    console.log(postId)
    this.post = fdb.getPostByPostId(this.postId)
  }
}
</script>
