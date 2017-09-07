<template lang="html">
<div class="container">
  <h1> Auth </h1>
  <div id="auth-container"></div>
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
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#auth-container', uiConfig);
    },
}
</script>

<style lang="css">
.container{
  margin:0;
  padding:0;
}
</style>
