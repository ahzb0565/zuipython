<template>
    <div>
        <Catalog v-on:article="getArticle"/>
        <div v-if="error">{{ error }}</div>
        <div v-if="!article"><Welcome /></div>
        <div v-else><Article v-bind:article="article" v-bind:error="error" /></div>
    </div>
</template>

<script>
import axios from 'axios'
import Welcome from './Welcome'
import Catalog from './Catalog'
import Article from './Article'

export default {
    name: 'Content',
    data: () => ({
        error: '',
        article: ''
    }),
    components: { Welcome, Catalog, Article },
    methods: {
        getArticle($event){
            axios.get(`/api/article/${$event.article}/`)
                .then((response) => {
                    this.article = response.data
                })
                .catch((error) => {
                    console.log(error)
                    this.error = error;
                })
        }
    }

}

</script>