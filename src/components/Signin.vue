<template>
  <div>

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
                      <div id="auth-container">
                      </div>
                    </md-card-content>
                  </md-card-expand>
            </md-card>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';
export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/auth/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#auth-container', uiConfig);
    },
}
</script>
<style>
#auth-container{
  margin: 0 0 0 0!important;
  padding: 20px 0 !important;

}
.newpost-cont-wrap{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin:0 auto;
  margin-top:20px;
}

</style>
