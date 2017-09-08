import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import router from './router'
import {config} from './helpers/firebaseConfig'
import VueMaterial from 'vue-material'
import moment from 'moment'
import loda from 'lodash'

Vue.use(VueRouter)
Vue.use(VueMaterial);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).startOf('minutes').fromNow();
}
});
Vue.prototype.moment = moment

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/auth/success')
      } else {
        this.$router.push('/auth/signin')
      }
     });
    },
  el: '#app',
  render: h => h(App)
});
