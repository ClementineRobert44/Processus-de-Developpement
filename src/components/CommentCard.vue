<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <h4 class="title is-4">{{ $t("labels.commentType") }}</h4>
                    <div class="control">
                        <div class="select">
                            <select v-model="selectedType" value="Note à moi même">
                                <option value="1" selected>Note à moi même</option>
                                <option value="2">Commentaire pour mon coach</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <h4 class="title is-4">{{ $t("labels.comment") }}</h4>
                    <div class="control">
                        <textarea v-model="comment" class="textarea" placeholder="Commentaire"></textarea>
                    </div>
                </div>

                <div class="field is-centered">
                    <div class="control">
                        <button class="button is-primary" type="submit" value="Submit" @click="this.sendComment()">{{ $t("labels.send") }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        async sendComment() {
            await this.$exerciceRepository.addCommentaire(this.comment, this.$route.params.id);
            await this.$exerciceRepository.addTypeCommentaire(this.selectedType, this.$route.params.id);
            await this.sendMail();
        },

        async sendMail() {
            const stagiaireName = (await this.$stagiaireRepository.getStagiaire()).Prenom;
            const moduleName = (await this.$moduleRepository.getModule(this.$route.params.id)).Titre;
            const subject = this.$t("labels.bricocoach");
            const content = this.$t("sentences.clientComment", { name: stagiaireName, module: moduleName });
            await this.$mailApi.sendMailToCoach(subject, content);
        },
    },
};
</script>
