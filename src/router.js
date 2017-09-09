import VueRouter from 'vue-router';
import Home from './components/home.vue';
import openpost from './components/openpost.vue'
import showposts from './components/showposts.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: showposts
    },
    {
      path: '/:id',
      component: openpost
      //props: (route) => ({
        //postId: route.params.id
      //})
    }
  ]
});

export default router;
