<template>
    <div>
        <h1 class="title is-1">{{ $t("titles.exercices") }}</h1>
        <ExerciceCard/>
    </div>
</template>

<script>
import ExerciceCard from '../components/ExerciceCard.vue'
export default {
    components : {
        ExerciceCard
    }

}
</script>

<style>

</style>