<template>
    <div class="container">
        <BarMenu
            :titles="[
                { title: this.$t('titles.home'), href: '/' },
                { title: this.$t('titles.modules'), href: '/modules' },
                { title: this.$t('titles.contact'), href: '/contact' },
            ]"
        />
        <div v-if="isAuthentified">
            <router-view />
        </div>
        <div v-else>
            <h1 class="title is-1">{{ $t("google.notConnected") }}</h1>
        </div>
    </div>
</template>

<script>
import googleSignInService from "./services/googleSignInService.js";
import BarMenu from "./components/BarMenu.vue";
export default {
    name: "App",
    components: {
        BarMenu,
    },
    computed: {
        isAuthentified() {
            return googleSignInService.isUserAuthentified();
        },
    },
};
</script>

<style>
html,
body {
    background-color: #333333;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

h1 {
    color: white !important;
}
</style>
