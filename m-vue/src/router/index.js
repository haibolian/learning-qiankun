import Home from '../components/HelloWorld.vue';
import About from '../components/About.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]