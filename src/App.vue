<template>
    <div id="article">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#article {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 10px;
    top: 60px;
    padding-left: 250px;
}
</style>