import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar'
import Catalog from './components/Catalog'
import router from './router'

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

