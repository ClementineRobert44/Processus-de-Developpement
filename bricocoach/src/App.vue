<template>
    <div class="container">
        <BarMenu :titles="
        [
            {title: this.$t('titles.home'), href:'/'},
            {title: this.$t('titles.exercices'), href:'/exercices'},
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
