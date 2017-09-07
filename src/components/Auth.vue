<template>
<div class="container">
        <md-toolbar class="md-medium" >
          <div class="md-toolbar-container">
            <h2 class="md-title" style="flex: 1;">Avouer</h2>
            <md-button class="md-icon-button" >
              <md-icon>search</md-icon>
            </md-button>
            <md-button v-if="this.$route.path!='/auth/signin'"
                      class="md-accent"
                       @click="logOut">
                LogOut
            </md-button>
          </div>
        </md-toolbar>
  <div>
      <router-view></router-view>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';
export default {
  name: 'auth',
  methods: {
      logOut() {
        firebase.auth().signOut();
      },
  }
}
</script>

<style lang="css" scoped>
.container{
  margin:0 !important;
  padding:0 !important;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow-x: hidden;
}

</style>
