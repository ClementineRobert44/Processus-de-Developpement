<template>
    <div v-if="this.isAuthentified()">authentified</div>
    <div v-if="this.stagiaire">Nom prénom : {{ this.stagiaire.Nom }} {{ this.stagiaire.Prenom }}</div>
</template>

<script>
import googleService from "../services/googleSignInService.js";
export default {
    data() {
        return {
            stagiaire: null,
        };
    },

    async mount() {
        this.stagiaire = await this.$stagiaireRepository.getStagiaire();
    },

    methods: {
        isAuthentified() {
            return googleService.isUserAuthentified();
        },
    },
};
</script>

<style></style>
