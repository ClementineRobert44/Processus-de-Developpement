<template>
    <div>
        <h1 class="title is-1">{{ $t("titles.coach") }}</h1>
        <div v-if="this.coach != null" class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <a :href="this.coach.Site"><img v-bind:src="this.coach.LogoSite" alt="Pas de logo" /></a>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ this.coach.Nom }} {{ this.coach.Prenom }}</p>
                        <p class="subtitle is-6">{{ this.coach.CompteGoogle }}</p>
                    </div>
                </div>

                <div class="content">
                    {{ this.coach.Description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            coach: null,
        };
    },

    async mounted() {
        this.coach = await this.$coachRepository.getCoach();
    },
};
</script>

<style></style>
