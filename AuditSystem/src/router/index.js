import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import ContentAudit from '@/components/ContentAudit'
import login from '@/components/login'
import account from '@/components/account'
import find from '@/components/find'
import keyWord from '@/components/keyWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/find'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [ 
	　　　{
	      path: 'find',
	      name: 'find',
	      component: find
        },
	　　　{
	      path: 'keyWord',
	      name: 'keyWord',
	      component: keyWord
	    }
	　　]
    },
    {
      path: '/ContentAudit',
      name: 'ContentAudit',
      component: ContentAudit
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})
