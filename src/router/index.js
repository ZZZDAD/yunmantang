import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Release from '@/components/Release'
import Message from '@/components/Message'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
