<template>
    <div id="sidebar">
        <b-card title="目录">
              <b-list-group flush>
                <b-list-group-item>Windows</b-list-group-item>
                <b-list-group-item>
                    <ul>
                        <li>简介</li>
                        <li>Excel</li>
                    </ul>
                </b-list-group-item>
              </b-list-group>
              <b-list-group flush>
                <b-list-group-item>Windows</b-list-group-item>
                <b-list-group-item>
                    <ul>
                        <li>简介</li>
                        <li>Excel</li>
                    </ul>
                </b-list-group-item>
              </b-list-group>
              <b-list-group flush>
                <b-list-group-item>Windows</b-list-group-item>
                <b-list-group-item>
                    <ul>
                        <li>简介</li>
                        <li>Excel</li>
                    </ul>
                </b-list-group-item>
              </b-list-group>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Catalog'
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
</style>