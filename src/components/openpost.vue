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
import loda from 'lodash'
export default{
  data(){
    return{
      "comment":{"title":"hello","ondate":new Date()},
      post:{},
      id:this.$route.params.id,
      comments:[]
    }
  },
  methods:{
    commentcall:function(){
      axios({
        method:'post',
        url:'https://avouer-c74ef.firebaseio.com/newpost/'+this.id+'/comments.json',
        data:this.comment
       })
        .then((response)=> {
            console.log(response)
       });
    }
  },
  created(){
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
