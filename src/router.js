import VueRouter from 'vue-router';
import Home from './components/home.vue';
import openPost from './components/openpost.vue'
import showposts from './components/showposts.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: showposts
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
