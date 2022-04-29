<template>
    <div>
        <h1 class="title is-1">{{ $t("titles.client") }}</h1>
        <div v-if="this.stagiaire != null" class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ this.stagiaire.Nom }} {{ this.stagiaire.Prenom }}</p>
                        <p class="subtitle is-6">{{ this.stagiaire.CompteGoogle }}</p>
                        <button class="button is-primary" v-on:click="this.sendMailTest()">Test mail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stagiaire: null,
        };
    },

    async mounted() {
        this.stagiaire = await this.$stagiaireRepository.getStagiaire();
    },
    methods: {
        async sendMailTest() {
            const from = (await this.$stagiaireRepository.getStagiaire()).CompteGoogle;
            const to = (await this.$coachRepository.getCoach()).CompteGoogle;
            await this.$mailApi.sendMail(from, to, "test", "prout");
        },
    },
};
</script>

<style></style>
