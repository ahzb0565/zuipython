import VueRouter from 'vue-router'
import Article from '../components/Article'
import Content from '../components/Content'

const test = {template: '<p>test</p>'}

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/1/'
    },{
        path: '/:id/',
        name: 'Content',
        component: Content
    }]
})