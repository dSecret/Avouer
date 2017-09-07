<template>
  <div>
    <div id="auth-container" >
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
  margin: 35vh 0 0 0!important;
  padding: 0 !important;

}
</style>
