<template>
    <div id="sidebar">
        <b-card title="目录" class="sidebar">
          <div v-if="error">{{ error }}</div>
          <div v-if="!topics || topics.length == 0">Loading...</div>
          <div v-else>
            <b-list-group flush v-for="topic in topics">
              <b-list-group-item>{{ topic.name }}</b-list-group-item>
              <b-list-group-item>
                <ul>
                  <li v-for="article in topic.articles" class="article-item">
                    <a v-on:click="getArticle(article.id)" href="#">{{ article.title }}</a>
                  </li>
                </ul>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Catalog',
    data: () => ({
        topics: null,
        error: null
    }),
    created() {
        axios.get('/api/topics/?level=' + this.$route.params.id)
            .then((response)=> {
                this.topics = this.filterTopics(response.data)
            })
            .catch((error) => {
                console.log(error)
                this.error = error
            })
    },
    methods: {
        filterTopics: function(topics){
            if (topics)
                return topics.filter((item) => item.articles.length > 0)
        },
        getArticle: function(id){
            this.$emit('article', {article: id})
        }
    }
}
</script>

<style>
#sidebar {
    position: absolute;
    top: 60px;
    left: 0px;
    overflow-y: auto;
    width: 250px;
    min-height: 500px;
    z-index: 1000;
}

.sidebar {
    height: 100%;
}

.article-item {
    list-style: none;
}
</style>