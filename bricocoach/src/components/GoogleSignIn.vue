<template>
	<div>
        <meta name="google-signin-scope" content="profile email">
        <meta name="google-signin-client_id" content="224038039367-oms0sqijnsejlknamgtsg0jllf1k0qr6.apps.googleusercontent.com">
        <div class="g-signin2" data-theme="dark" data-onsuccess="this.onSignIn"></div>
    </div>
</template>

<script>
export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
      document.head.appendChild(recaptchaScript)
    },
	methods: {
        onSignIn(googleUser) {
            console.log(googleUser);               
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log("Email: " + profile.getEmail());

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token);
            
        }
    }
}
</script>

<style>

</style>