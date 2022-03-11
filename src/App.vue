<template>
    <div class="container">
        <BarMenu :titles="
        [
            {title: this.$t('titles.home'), href:'/'},
            {title: this.$t('titles.modules'), href:'/modules'},
            {title: this.$t('titles.achievements'), href:'/achievements'},
            {title: this.$t('titles.contact'), href:'/contact'},
        ]"/>
        <router-view/>
    </div>
</template>

<script>
import BarMenu from './components/BarMenu.vue'
export default {
    name: "App",
    components: {
        BarMenu
    }
}
</script>

<style>
html, body {
    background-color:#333333;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 { color:white !important}
</style>
