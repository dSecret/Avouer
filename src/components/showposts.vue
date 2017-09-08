<template>
    <div style="margin-top:20px;width:100%;">
      <md-card v-for="post in posts" style="margin-top:20px;">
          <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{post.title}}</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header-text>
          </md-card-header>

          <md-card-media>
          <img :src="'/src/assets/'+post.image" alt="people">
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
          posts:[]
     }
   },
   created(){
     var postsarray=[];
     axios({
       method:'get',
       url:'https://avouer-c74ef.firebaseio.com/newpost.json',
       responseType:'stream'
      })
       .then(function(response) {
          console.log(response);
           for(let key in response.data){
              response.data[key].id=key
              postsarray.push(response.data[key]);
           }
           console.log(postsarray);

      });
      this.posts=postsarray;
   },
   methods:{

   }
}
</script>
