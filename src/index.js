import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar'
import Catalog from './components/Catalog'
import router from './router'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)


new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />'
})

new Vue({
    el: '#catalog',
    components: { Catalog },
    template: '<Catalog />'
})

new Vue({
    el: '#article',
    router,
    components: { App },
    template: '<App />'
})

