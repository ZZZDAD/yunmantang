import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Release from '@/components/release/Release'
import Message from '@/components/message/Message'
import My from '@/components/my/My'

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
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
