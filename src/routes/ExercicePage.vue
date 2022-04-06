<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ parseInt(detailsExercice.id) + 1 }}. {{ detailsExercice.title }}
      </p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        {{ detailsExercice.description }}

        <br />
        <p>
          {{ detailsExercice.dateDebutPrev }} -
          {{ detailsExercice.dateFinPrev }}
        </p>
      </div>

      <div class="content">Durée : {{ detailsExercice.duree }}</div>

      <h2>Outils à utiliser</h2>

      <div class="list">
        <ul>
          <div
            v-for="tool in detailsExercice.necessaryTools"
            :key="tool.name"
            class="list-item"
          >
            <li>{{ tool.name }}</li>
          </div>
        </ul>
      </div>
    </div>
    <footer class="card-footer">
      <a v-on:click="start()" class="card-footer-item">Commencer</a>
      <a v-on:click="end()" class="card-footer-item">Terminer</a>
      <router-link
        class="card-footer-item"
        :to="{
          name: 'Commentaire',
          params: {
            idExercice: exercice.id,
            exercice: exercice,
          },
        }"
        >Commenter
      </router-link>
    </footer>
  </div>
</template>

<script>
import { setFormatDate } from "../services/dateService.js";
export default {
  data() {
    return {
      detailsExercice: {},
    };
  },
  props: {
    exercice: String,
  },
  created() {
    this.detailsExercice = JSON.parse(this.exercice);
    console.log(this.detailsExercice);
  },

  methods: {
    start() {
      const dateDebutReel = setFormatDate(new Date());
      console.log("Je commence l'exo", dateDebutReel);
    },
    end() {
      const dateFinReel = setFormatDate(new Date());
      console.log("Je termine l'exo", dateFinReel);
    },
  },
};
</script>

<style></style>
