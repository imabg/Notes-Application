import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import ViewPosts from './components/view.vue'
import SingleNote from './components/individualNote.vue'
import EditNote from './components/noteDescription.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/view',
      name: 'viewPosts',
      component: ViewPosts
    },
    {
      path: '/view/:id',
      name: 'singleNote',
      component: SingleNote
    },
    {
      path: '/edit/:id',
      name: 'note',
      component: EditNote
    }
  ]
})
