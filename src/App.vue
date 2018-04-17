<template>
    <div id="article">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style></style>