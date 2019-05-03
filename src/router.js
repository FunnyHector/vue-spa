import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // Anything that is hit using a URL like /menu belongs in the views folder.
  // Everything else should be in the components folder.
  // In other words, anything that is directly defined in routes, should be in the views folder.
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //
      // If we import them first, and use the imported view as component, then it's not lazy loaded.
      // The example is Home, which is an actual JS object instead of a lambda, so it's eager loaded
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "menu" */ './views/Menu.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import(/* webpackChunkName: "signin" */ './views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import(/* webpackChunkName: "join" */ './views/Join.vue')
    }
  ]
});
