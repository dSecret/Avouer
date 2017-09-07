<template>
    <div style="margin-top:20px;width:100%;">
      <md-card>
          <md-card-header>
          <md-card-header-text>
            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header-text>
          </md-card-header>

          <md-card-media>
          <img src="/src/assets/1.png" alt="people">
          </md-card-media>

          <md-card-content>
              {{posts}}
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

     axios({
       method:'get',
       url:'https://avouer-c74ef.firebaseio.com/newpost.json',
       responseType:'stream'
      })
       .then(function(response) {
          console.log(response);
          var postsarray=[];
           for(let key in response.data){
              response.data[key].id=key
              postsarray.push(response.data[key]);
           }
           console.log(postsarray);
      });
   },
   methods:{

   }
}
</script>
