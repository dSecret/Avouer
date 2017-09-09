<template>

    <div>
          <md-card  style="margin-top:20px;">
              <md-card-header>
                    <md-card-header-text>
                      <div class="md-title" v-if="post.title!=''">
                            {{post.title}}
                      </div>
                      <div class="md-subhead">{{post.onDate | formatDate}}</div>
                    </md-card-header-text>
              </md-card-header>
              <md-card-content>
                  {{post.description}}
              </md-card-content>
              <md-card-media v-if="!post.link==''">
                <img :src="post.link" class="img" alt="people">
              </md-card-media>
          </md-card>
          <div>
            <md-card
                     style="margin-top:20px;padding:0px 0 4px 0;"
                     >
              <md-card-content style="padding:0 10px;;">
                <md-input-container md-clearable>
                    <label>Comment goes here</label>
                    <md-textarea v-model="newComment" ></md-textarea>
                </md-input-container>
                <div align="right">
                  <md-button v-show="newComment != ''" @click="addNewComment"
                              style="margin:0;"
                              class="md-primary"
                              >
                              Comment
                  </md-button>
                </div>
              </md-card-content>
            </md-card>

          </div>
          <div style="margin-top:20px;">
              <md-card style="margin-top:20px;">
                      <div v-if="comments.length==0" align="center">
                          No Comments Yet!
                      </div>
                      <md-list >
                            <md-list-item v-for="comment in comments">
                              <div>
                                <div>
                                    <span class="md-caption">
                                        {{comment.ondate |formatDate}}
                                    </span>
                                </div>
                                <div >
                                  <span class="md-body-2">
                                     {{comment.comment}}
                                   </span>
                                </div>
                              </div>
                            </md-list-item>
                      </md-list>

              </md-card>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import loda from 'lodash'
import _fdb from './../db/firedb.js'
import moment from 'moment'

const fdb = _fdb()

export default{
  name: 'Post',
  data(){
    return{
      newComment: '',
      post:{},
      id: this.$route.params.id,
      comments:[]
    }
  },
  methods: {
    addNewComment () {
      fdb.addNewComment(this.id, this.newComment).then(resp => {
        if (resp.status == 200) {
          this.newComment = ''
        }
      })
      setTimeout(() => {fdb.getPostByPostId(this.id)
        .then(data => {
          var updated = []
          const comms = data.comments
          for (let key in comms) {
            const comm = comms[key]
            comm.id = key
            updated.push(comm)
          }
          return updated
        })
        .then(newComms => {
          this.comments = loda.reverse(
            loda.sortBy(
              loda.unionBy(this.comments, newComms, 'id'),
              c => moment(String(c.ondate)).valueOf(),
            )
          )
        })
      },1 * 1000)
    }
  },
  created(){
    fdb.getPostByPostId(this.id)
      .then(data => {
        this.post = data
        return data.comments
      })
      .then(comments => {
        for (let key in comments) {
          const comment = comments[key]
          comments.id = key
          this.comments.push(comment)
        }
        this.comments = loda.reverse(
          loda.sortBy(
            this.comments,
            c => moment(String(c.ondate)).valueOf(),
          )
        )
      })
  }
}
</script>
<style>
.img{
}
.comment{
  margin:10px 0px 0 0px;
  background-color:  #f3f3f3;
  border-left:2px solid black;
  padding:10px
}
</style>
