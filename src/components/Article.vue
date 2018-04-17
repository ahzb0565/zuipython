<template>
    <div class="article">
        <div v-if="error">{{ error }}</div>
        <div v-else-if="!article">Loading ...</div>
        <div v-else>
            <center><h1>{{ article.title }}</h1></center>
            <br />
            <div class="article-body">
                <vue-markdown :source="article.body"></vue-markdown>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

export default {
    name: 'Article',
    props: ['article', 'error'],
    components: { VueMarkdown }
}
</script>

<style scoped>
.article {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 10px;
    top: 60px;
    padding-left: 250px;
}
.article-body {
    margin: 0px 10px;
}
</style>