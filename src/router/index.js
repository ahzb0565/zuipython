import Vue from 'Vue'
import VueRouter from 'vue-router'
import Article from '../components/Article'

Vue.use(VueRouter)

const test = {template: '<p>test</p>'}

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Article',
        component: Article
    },{
        path: '/test',
        name: 'test',
        component: test
    }]
})