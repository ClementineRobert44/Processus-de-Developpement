<template>
  <router-link
    :to="{
      name: 'Exercice',
      params: {
        idE: exercice.id,
        exercice: JSON.stringify(exercice),
      },
    }"
  >
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              <span class="numberExercice"
                >{{ parseInt(this.exercice.id) + 1 }}.</span
              >
              {{ this.exercice.title }}
            </p>
          </div>
        </div>
        <div class="content">
          {{ this.exercice.description }}
        </div>
      </div>
      <div
        :class="{
          'avancement isNotStart': this.exercice.advancement == 'notStart',
          'avancement isInProgress': this.exercice.advancement == 'inProgress',
          'avancement isFinish': this.exercice.advancement == 'finish',
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
