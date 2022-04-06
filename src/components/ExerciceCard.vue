<template>
  <router-link
    :to="{
      name: 'Exercice',
      params: {
        idE: exercice.id,
        exercice: exercice,
      },
    }"
  >
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              <span class="numberExercice">{{ this.exercice.id }}.</span>
              {{ this.exercice.titre }}
            </p>
          </div>
        </div>
        <div class="content">
          {{ this.exercice.description }}
        </div>
      </div>
      <div
        :class="{
          'avancement isNotStart': this.exercice.etat == 0,
          'avancement isInProgress': this.exercice.etat == 1,
          'avancement isFinish': this.exercice.etat == 2,
        }"
      >
        t
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {},

  props: {
    exercice: Object,
  },

  created() {
      console.log(this.exercice);
  }
};
</script>

<style>
.numberExercice {
  color: #f07969;
}

.avancement {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.isNotStart {
  background-color: #d05252;
  color: #d05252;
}

.isInProgress {
  background-color: #e1a751;
  color: #e1a751;
}

.isFinish {
  background-color: #63d052;
  color: #63d052;
}
</style>
