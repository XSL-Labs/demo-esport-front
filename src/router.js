import { createRouter, createWebHistory } from 'vue-router';
import VueCookies from 'vue-cookies';

import Home from './views/Home';
import Register from './views/Register';
import User from './views/User';
import Admin from './views/Admin';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/user', component: User },
    { path: '/admin', component: Admin },
    { path: '/:notFound(.*)',  redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  if ((to.path == '/user' || to.path == '/admin') && !VueCookies.get('token')) {
    return router.push('/');
  }
  if ((to.path != '/user' && to.path != '/admin') && VueCookies.get('token')) {
    return router.push('/user');
  }
  return next();
})

export default router;
 