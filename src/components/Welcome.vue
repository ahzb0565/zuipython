<template>
    <div>
        <center>
            <h1>Welcome</h1>
            <p>这是一些感谢的话语，还有关于嘴哥和zuipython的一些介绍</p>
            <p>Cheers!</p>
            <p>level: {{ $route.params.id }}</p>
        </center>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'Welcome',
    create(){
        Vue.prototype.level = this.$route.params.id
    }
}
</script>