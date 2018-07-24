import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import ContentAudit_Operate from '@/components/ContentAudit_Operate'
import ContentAudit_product from '@/components/ContentAudit_product'
import ContentAudit_user from '@/components/ContentAudit_user'
import login from '@/components/login'
import find from '@/components/find'
import keyWord from '@/components/keyWord'
import tab from '@/components/tab'
import keyWord_Crawl from '@/components/keyWord_Crawl'
import keyWord_Disable from '@/components/keyWord_Disable'
import keyWord_Sensitive from '@/components/keyWord_Sensitive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/tab/find'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [ 
	　　　{
	      path: 'tab',
	      name: 'tab',
	      component: tab,
	      children:[
	      	{
			      path: 'keyWord',
			      name: 'keyWord',
			      component: keyWord,
			      children:[
			      {
			      	 path: 'keyWord_Crawl',
			         name: 'keyWord_Crawl',
			         component: keyWord_Crawl
			      },
			      {
			      	 path: 'keyWord_Disable',
			         name: 'keyWord_Disable',
			         component: keyWord_Disable
			      },
			      {
			      	 path: 'keyWord_Sensitive',
			         name: 'keyWord_Sensitive',
			         component: keyWord_Sensitive
			      }
			      ]
			   },
	      	{
			      path: 'find',
			      name: 'find',
			      component: find
			   },
	      	{
		      path: 'ContentAudit_Operate',
		      name: 'ContentAudit_Operate',
		      component: ContentAudit_Operate
		    },
		    {
		      path: 'ContentAudit_product',
		      name: 'ContentAudit_product',
		      component: ContentAudit_product
		    },
		    {
		      path: 'ContentAudit_user',
		      name: 'ContentAudit_user',
		      component: ContentAudit_user
		    }
		    
	      	
	      ]
        },
	　　　
	　　]
    },
    {
    	 path: '/login',
      name: 'login',
      component: login,
    }
    
  ]
})
