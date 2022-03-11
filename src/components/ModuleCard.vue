<template>
    <div>
        <h1 class="title is-1">{{ module.title }}</h1>
        <div class="columns is-multiline">
            <ExerciceCard class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd" 
                v-for="item in module.exercices" :key="item.id"
                :exercice="item"
            />
        </div>
    </div>
</template>

<script>
import ExerciceCard from './ExerciceCard.vue'
export default {
    components: {
        ExerciceCard
    },
    props: {
        module: Object
    },
}
</script>

<style>

</style>