<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-else-if="!this.title">Loading ...</div>
        <div v-else>
            <center><h3>{{ title }}</h3></center>
            <div class="article-body">
                <vue-markdown>{{ body }}</vue-markdown>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

export default {
    name: 'Article',
    data: () => ({
        title: null,
        body: null,
        id: 1
    }),
    components: { VueMarkdown },
    created(){
        if(this.id){
            axios.get(`/api/article/${this.id}/`)
                .then((response) => {
                    console.log(response.data)
                    this.title = response.data.title
                    this.body = response.data.body
                })
                .catch((error) => {
                    console.log(error)
                    this.error = error;
                })
        }
    }
}
</script>

<style scoped>
.article-body {
    margin: 0px 10px;
}
</style>