<template>
	<div>
        <div class="button is-primary" v-on:click="handleClickSignIn">Google</div>
    </div>
</template>

<script>
export default {
	methods: {
        async handleClickSignIn() {
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) return null;

                console.log("googleUser", googleUser);
                console.log("getId", this.user);
                console.log("getAuthResponse", googleUser.getAuthResponse());

                var accessToken = googleUser.getAuthResponse().access_token;
                sessionStorage.setItem('access_token', accessToken);
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },
    }
}
</script>

<style>

</style>