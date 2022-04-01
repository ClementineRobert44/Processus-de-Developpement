<template>
	<div>
        <div class="button is-primary" v-on:click="handleClickSignIn">{{ this.isAuthentified ? $t("google.signout") : $t("google.signin") }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuthentified : sessionStorage.getItem('access_token') != null
        }
    },
    
	methods: {
        handleClickSignIn() {
            if(this.isAuthentified)
                this.signOut();
            else
                this.signIn();
        },


        async signIn() {
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) return null;

                console.log("googleUser", googleUser);
                console.log("getId", this.user);
                console.log("getAuthResponse", googleUser.getAuthResponse());

                var accessToken = googleUser.getAuthResponse().access_token;
                sessionStorage.setItem('access_token', accessToken);

                this.isAuthentified = true;
            } catch (error) {
                //on fail do something
                console.error(error);
                this.isAuthentified = false;
                return null;
            }
        },

        signOut() {
            sessionStorage.removeItem('access_token');
            this.isAuthentified = false;
        }
    }
}
</script>

<style>

</style>