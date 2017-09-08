import VueRouter from 'vue-router';
import Home from './components/home.vue';
<<<<<<< HEAD
import openpost from './components/openpost.vue'
=======
import openPost from './components/openpost.vue'
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
import showposts from './components/showposts.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
<<<<<<< HEAD
    { path: '/', component: Home ,
      children:[
        {path:'',component:showposts},
        {path:'success/:id',component:openpost},
      ]
=======
    {
      path: '/',
      component: showposts
>>>>>>> 84082eeb19ed6dd1af8af7142fd0adf1e6cdae66
    },
    {
      path: 'post/:id',
      component: openPost,
      props: (route) => ({
        postId: route.params.id
      })
    }
  ]
});

export default router;
