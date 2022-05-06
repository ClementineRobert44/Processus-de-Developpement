<template>
    <div v-if="this.module && this.exercices">
        <h1 class="title is-1">{{ this.module.Titre }}</h1>
        <div class="columns is-multiline">
            <ExerciceCard
                class="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
                v-for="item in this.exercices"
                :key="item.Id"
                :idStep="this.exercices.findIndex((e) => e.Id == item.Id) + 1"
                :exercice="item"
            />
        </div>
    </div>
</template>

<script>
import ExerciceCard from "./ExerciceCard.vue";
export default {
    components: {
        ExerciceCard,
    },
    props: {
        idModule: String,
    },

    data() {
        return {
            module: {},
            exercices: [],
        };
    },

    async mounted() {
        this.module = await this.$moduleRepository.getModule(this.idModule);
        this.exercices = await this.$exerciceRepository.getExercicesModule(this.module.Id);
        console.log(this.exercices);
    },
};
</script>

<style>
.columns {
    margin: 10px;
}
</style>
