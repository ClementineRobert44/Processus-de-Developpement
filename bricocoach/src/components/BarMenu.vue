<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div ref="navbarMenu" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" v-for="t in titles" :key="t.title"
                            :to="t.href">
                    {{t.title}}
                </router-link>
                
                <!--I18n-->
                <div class="navbar-item has-dropdown is-hoverable is-dark">
                    <a class="navbar-link">
                        {{ $t('titles.language') }}
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="#" @click="this.setLocale('fr', $i18n)">
                        Français
                        </a>
                        <a class="navbar-item" href="#"  @click="this.setLocale('en', $i18n)">
                        English
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-brand">
            <a @click="this.onBurgerClick" ref="burgerMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <span class="navbar-item">
                <GoogleSignIn/>
            </span>
        </div>
    </nav>
</template>


<script>

import GoogleSignIn from './GoogleSignIn.vue'
export default
{
    name:"BarMenu",
    components: {
        GoogleSignIn
    },

    data() {
        return {
            burgerToggle: false
        }
    },		
    props:
    {
        titles: Array
    },

    methods: {
        onBurgerClick() {
            this.burgerToggle = !this.burgerToggle;
            if(this.burgerToggle)
                this.openBurger();
            else
                this.closeBurger();
        },

        openBurger() {
            this.$refs.burgerMenu.classList.add("is-active");
            this.$refs.navbarMenu.classList.add("is-active");
        },

        closeBurger() {
            this.$refs.burgerMenu.classList.remove("is-active");
            this.$refs.navbarMenu.classList.remove("is-active");
        },


        setLocale(locale, i18n) {
            i18n.locale = locale;
            localStorage.setItem('locale', locale);
        },
    }
}
</script>

<style>
.navbar
{
    box-shadow: 10px -5px 50px black;
    margin-bottom: 50px;
    background-color: #333;
}
</style>