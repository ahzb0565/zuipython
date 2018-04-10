import VueRouter from 'vue-router'
import Article from '../components/Article'

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