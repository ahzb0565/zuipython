<template>
    <div>
        <center><h3>{{ title }}</h3></center>
        <vue-markdown>{{ body }}</vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    name: 'Article',
    data: () => ({
        title: 'First Article',
        body: 'i am a ~~tast~~ **test**.'
    }),
    components: { VueMarkdown }
}
</script>