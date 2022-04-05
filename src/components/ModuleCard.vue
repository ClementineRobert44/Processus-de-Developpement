<template>
  <div>
    <h1 class="title is-1">{{ module.title }}</h1>
    <div class="columns is-multiline">
      <ExerciceCard
        class="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
        v-for="item in module.exercices"
        :key="item.id"
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
    module: Object,
  },
};
</script>

<style>
.columns {
  margin: 10px;
}
</style>
