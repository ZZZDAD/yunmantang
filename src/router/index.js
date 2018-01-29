import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Release from '@/components/release/Release'
import Message from '@/components/message/Message'
import My from '@/components/my/My'
import MyRelease from '@/components/my/MyRelease'
import MyBooking from '@/components/my/MyBooking'
import MySold from '@/components/my/MySold'
import MyBought from '@/components/my/MyBought'
import Search from '@/components/search/Search'
import SearchResult from '@/components/search_result/SearchResult'
import ItemList from '@/components/item_list/ItemList'
import Item from '@/components/item/Item'
import User from '@/components/user/User'

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
    },
    {
      path: '/my/my_release',
      name: 'MyRelease',
      component: MyRelease
    },
    {
      path: '/my/my_booking',
      name: 'MyBooking',
      component: MyBooking
    },
    {
      path: '/my/my_sold',
      name: 'MySold',
      component: MySold
    },
    {
      path: '/my/my_bought',
      name: 'MyBought',
      component: MyBought
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/search_result',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/item_list',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
