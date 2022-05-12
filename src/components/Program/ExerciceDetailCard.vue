<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title column">{{ exercice.Titre }}</p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ exercice.Description }}

                <br />
                <br />
                <p>{{ $t("labels.startTime") }} : {{ exercice.DateDebutPrev }} - {{ $t("labels.endTime") }} : {{ exercice.DateFinPrev }}</p>
                <p v-if="this.exercice.Etat != '0'">{{ $t("labels.realStartTime") }} {{ exercice.DateDebutReel }} - {{ $t("labels.realEndTime") }} {{ exercice.Etat == "2" ? exercice.DateFinReel : null }}</p>
            </div>

            <div class="content">{{ $t("labels.duration") }} {{ exercice.Duree }}</div>
            <div v-if="this.exercice.NecessaryTools">
                <h2>{{ $t("labels.requiredTools") }} :</h2>
                <ul>
                    <li v-for="tool in this.exercice.NecessaryTools.split(', ')" :key="tool">{{ tool }}</li>
                </ul>
            </div>

            <div class="list">
                <ul>
                    <div v-for="tool in exercice.necessaryTools" :key="tool.name" class="list-item">
                        <li>{{ tool.name }}</li>
                    </div>
                </ul>
            </div>
        </div>
        <footer class="card-footer">
            <a v-if="this.exercice.Etat == '0'" v-on:click="start()" class="card-footer-item">{{ $t("labels.start") }}</a>

            <a v-if="this.exercice.Etat == '1'" v-on:click="reToDo()" class="card-footer-item">{{ $t("labels.unstart") }}</a>

            <a v-if="this.exercice.Etat == '1'" v-on:click="end()" class="card-footer-item">{{ $t("labels.end") }}</a>

            <a v-if="this.exercice.Etat == '2'" v-on:click="reInProgress()" class="card-footer-item">{{ $t("labels.unend") }}</a>

            <router-link
                class="card-footer-item"
                :to="{
                    name: 'Commentaire',
                    params: {
                        idExercice: exercice.id,
                    },
                }"
                >Commenter
            </router-link>
        </footer>
    </div>
</template>

<script>
import { setFormatDate } from "../../services/dateService.js";
export default {
    props: {
        idExercice: String,
    },

    data() {
        return {
            exercice: {},
        };
    },

    async created() {
        this.exercice = await this.$exerciceRepository.getExercice(this.idExercice);
    },

    async mounted() {
        this.exercice = await this.$exerciceRepository.getExercice(this.idExercice);
    },

    methods: {
        start() {
            const dateDebutReel = setFormatDate(new Date());
            this.exercice.Etat = "1";
            console.log(this.exercice.Etat);
            this.$exerciceRepository.updateEtat(this.exercice.Id, 1, dateDebutReel);
        },
        end() {
            const dateFinReel = setFormatDate(new Date());
            this.exercice.Etat = "2";

            this.$exerciceRepository.updateEtat(this.exercice.Id, 2, dateFinReel);
        },

        reToDo() {
            this.exercice.Etat = "0";

            this.$exerciceRepository.updateEtat(this.exercice.Id, 0);
        },

        reInProgress() {
            this.exercice.Etat = "1";

            this.$exerciceRepository.updateEtat(this.exercice.Id, 1);
        },
    },
};
</script>

<style></style>
