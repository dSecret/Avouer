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
                    <md-textarea v-model="comment" ></md-textarea>
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
              <!--<md-card v-for="comments in post.comments"*/
                       style="margin-top:20px;"
                       >
                <md-card-content>
                    {{comments}}
                </md-card-content>
              </md-card>-->
              <md-card
                       style="margin-top:20px;"
                       >
                <md-card-content>
                  <div class="comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </md-card-content>
              </md-card>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      "comment":"hello",
      post:{},
      id:this.$route.params.id
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
          this.post=response.data;
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
