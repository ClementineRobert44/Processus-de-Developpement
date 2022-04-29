<template>
    <div>
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <textarea ref="mailContent" :placeholder="$t('titles.contact')" />
                        <button class="button is-primary" v-on:click="this.sendMail()">{{ $t("labels.send") }}</button>
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
        async sendMail() {
            const stagiaireName = (await this.$stagiaireRepository.getStagiaire()).Prenom;
            const subject = this.$t("sentences.clientComment", { name: stagiaireName, exercice: 0 });
            const content = this.$refs.mailContent.value;
            await this.$mailApi.sendMailToCoach(subject, content);
        },
    },
};
</script>

<style></style>
