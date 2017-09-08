import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';
import homepage from './components/Signin.vue'
import openpost from './components/openpost.vue'
import showposts from './components/showposts.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth ,
      children:[
        {path:'success',component:showposts},
        {path:'success/:id',component:openpost},
        {path:'signin',component:homepage}
      ]
    },

  ]
});

export default router;
