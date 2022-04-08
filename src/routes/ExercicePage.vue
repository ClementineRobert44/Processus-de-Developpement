<template>
  <ExerciceDetailCard :idExercice="this.$route.params.idE" />
</template>

<script>
import ExerciceDetailCard from "../components/Program/ExerciceDetailCard.vue";
export default {
  components: {
    ExerciceDetailCard,
  },

  props: {
    exercice: String,
  },
};
</script>

<style></style>
