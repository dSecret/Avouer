<template>
  <div>
    <!--<div>
        <md-button @click="logOut">logout</md-button>
    </div>
    <div>
        <img :src="photo" style='height: 120px'/> <br>
        <p>{{name}}</p>
        <p>{{email}}</p>
        <p>{{userId}}</p>
        <div>{{user}}</p>
      </div>
  </div>-->
  <div class="newpost-cont-wrap">
          <md-card md-with-hover>
                <md-card-header>
                <div class="md-title">New Post</div>
                <div class="md-subhead">All Anonymous</div>
                </md-card-header>
                <md-card-expand>
                  <md-card-actions>
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                  </md-card-actions>

                  <md-card-content>
                      <div v-if="postmssg" align="center">
                           Post Added!!<br>
                           <a href="/">Refresh</a>
                           to update the newsfeed.<br>
                          <md-button class="md-accent md-raised"
                                      @click="addmore">
                              Add more
                          </md-button>
                      </div>
                      <div v-if="!postmssg && !poststatus && this.$route.path!='/sigin'">
                        <md-input-container md-clearable>
                            <label>Title (Required)</label>
                            <md-input v-model="newpost.title"></md-input>
                        </md-input-container>
                        <md-input-container md-clearable>
                            <label>Description (optional)</label>
                            <md-textarea v-model="newpost.description" ></md-textarea>
                        </md-input-container>
                        <md-input-container>
                          <label>Image-Link</label>
                          <md-input v-model="newpost.link" ></md-input>
                        </md-input-container>
                        <md-card-actions>
                          <span style="flex: 1"></span>
                          <md-button class="md-primary md-raised"
                                      @click="post"
                                      v-show="newpost.title!=''">
                            Post
                          </md-button>
                        </md-card-actions>
                      </div>
                      <div v-if="poststatus" align="center">
                          <md-spinner :md-size="150" md-indeterminate class="md-warn"></md-spinner>
                      </div>
                  </md-card-content>
                </md-card-expand>
          </md-card>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      poststatus: false,
      postmssg: false,
      newpost: {
        title:'',description:'',link:'',ondate:'',comments:[]
      }
    }
  },
  methods: {
    addmore(){
        this.poststatus=false;
        this.postmssg=false;
    },
    post:function(){
        console.log('working');
        this.poststatus=true;
        this.newpost.ondate=new Date();
        axios({
            method: 'post',
            url: 'https://avouerreview.firebaseio.com/newpost.json',
            data:this.newpost
        }).then((response)=>{
              if(response.status==200){
                  this.poststatus=false;
                  this.postmssg=true;
                   this.$router.replace('/')
              }
        });

    }
  },
};
</script>
<style>
  .newpost-cont-wrap{
    width:100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin:0 auto;
    margin-top:20px;
  }

</style>
