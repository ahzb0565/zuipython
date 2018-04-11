import VueRouter from 'vue-router'
import Article from '../components/Article'
import Welcome from '../components/Welcome'

const test = {template: '<p>test</p>'}

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Welcome',
        component: Welcome
    },{
        path: '/article/:id',
        name: 'Article',
        component: Article
    }]
})