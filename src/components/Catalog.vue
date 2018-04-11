<template>
    <div id="sidebar">
        <b-card title="目录" class="sidebar">
          <div v-if="error">{{ error }}</div>
          <div v-if="!topics">Loading...</div>
          <div v-else>
            <b-list-group flush v-for="topic in topics">
              <b-list-group-item>{{ topic.name }}</b-list-group-item>
              <b-list-group-item>
                <ul>
                  <li v-for="article in topic.articles">{{ article }}</li>
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
        axios.get('/api/topics/')
            .then((response)=> {
                this.topics = response.data
            })
            .catch((error) => {
                console.log(error)
                this.error = error
            })
    }
}
</script>

<style>
#sidebar {
    position: absolute;
    top: 60px;
    left: 0px;
    bottom: 0px;
    overflow-y: auto;
    width: 250px;
}

.sidebar {
    height: 100%;
}
</style>