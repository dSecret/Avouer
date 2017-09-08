import VueRouter from 'vue-router';
import Home from './components/home.vue';
import openpost from './components/openpost.vue'
import showposts from './components/showposts.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home ,
      children:[
        {path:'',component:showposts},
        {path:'success/:id',component:openpost},
      ]
    },

  ]
});

export default router;
