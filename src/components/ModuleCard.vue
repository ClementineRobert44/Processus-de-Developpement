<template>
  <div>
    <h1 class="title is-1">{{ titre }}</h1>
    <div class="columns is-multiline">
      <ExerciceCard
        class="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
        v-for="item in this.exercices"
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
    id: String,
    titre: String,
    description: String,
    Image: String,
  },

  data() {
    return {
      exercices: [],
    };
  },

  async mounted() {
    while (this.exercices.length === 0) {
      this.exercices = await this.$exerciceRepository.getExercicesModule(
        this.id
      );
    }
  },
};
</script>

<style>
.columns {
  margin: 10px;
}
</style>
