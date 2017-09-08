<template>
    <div>
      <md-card
                style="margin-top:20px;"
                >
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
    </div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      post:{},
      id:this.$route.params.id
    }
  },
  created(){
    axios({
      method:'get',
      url:'https://avouer-c74ef.firebaseio.com/newpost/'+this.id+'.json',
      responseType:'stream'
     })
      .then((response)=> {
          console.log(response)
          this.post=response.data;
     });
  }
}
</script>
