import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import router from './router'
import VueMaterial from 'vue-material'
import moment from 'moment'
import loda from 'lodash'
import urlparse from 'url-parse'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).startOf('minutes').fromNow();
  }
});
Vue.filter('getImgurImage', value => {
  const parsed = urlparse(value, true)
  const paths = loda.split(parsed.pathname, '/')
  console.log(paths)
  return value
})

Vue.prototype.moment = moment

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
