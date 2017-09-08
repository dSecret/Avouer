<template>
    <div>
      <md-card  style="margin-top:20px;">
<<<<<<< HEAD
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
              <md-card-media>
                <img src="https://i.imgur.com/iThrRGP.jpg" class="img" alt="people">
              </md-card-media>
          </md-card>
          <div>
            <md-card
                     style="margin-top:20px;padding:0px 0 4px 0;"
                     >
              <md-card-content style="padding:0 10px;;">
                <md-input-container md-clearable>
                    <label>Description goes here</label>
                    <md-textarea v-model="comment.title" ></md-textarea>
                </md-input-container>
                <div align="right">
                  <md-button @click="commentcall"
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
              <md-card
=======
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
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
                       style="margin-top:20px;"
                       >
                <md-card-content>
                  <div class="comment" v-for="commenti in comments">
                    <div>
                        <h3>{{commenti.ondate |formatDate}}</h3>
                    </div>
                          {{commenti.title}}
                  </div>
                </md-card-content>
              </md-card>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
<<<<<<< HEAD
import loda from 'lodash'
=======
import _fdb from './../db/firedb.js'

const fdb = _fdb()

>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
export default{
  name: 'Post',
  props: ['postId'],
  data(){
<<<<<<< HEAD
    return{
      "comment":{"title":"hello","ondate":new Date()},
      post:{},
      id:this.$route.params.id,
      comments:[]
=======
    return {
      post: {},
      comment: ""
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
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
<<<<<<< HEAD
    axios({
      method:'get',
      url:'https://avouer-c74ef.firebaseio.com/newpost/'+this.id+'.json',
      responseType:'stream'
     })
      .then((response)=> {
        var commentsarray=[];
        console.log(response);
         for(let key in response.data.comments){
            response.data.comments[key].id=key
            commentsarray.push(response.data.comments[key]);
         }
          this.post=response.data;
          this.comments=_.reverse(commentsarray);
     });
=======
    console.log(postId)
    this.post = fdb.getPostByPostId(this.postId)
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
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
