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
          <md-card-media>
          <img src="https://i.imgur.com/iThrRGP.jpg" alt="people">
          </md-card-media>
          <md-card-content>
              {{post.description}}
          </md-card-content>
          </md-card>
          <div style="margin-top:20px;padding:20px;">
              <md-input-container md-clearable>
                  <label>Description goes here</label>
                  <md-textarea v-model="comment" ></md-textarea>
              </md-input-container>
              <md-button @click="commentcall">Comment</md-button>
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
