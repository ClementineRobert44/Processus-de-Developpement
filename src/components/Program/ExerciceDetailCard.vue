<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ exercice.Id }}. {{ exercice.Titre }}</p>
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
        <p>
          {{ exercice.DateDebutPrev }} -
          {{ exercice.DateFinPrev }}
        </p>
      </div>

      <div class="content">Durée : {{ exercice.Duree }}</div>

      <h2>Outils à utiliser</h2>

      <div class="list">
        <ul>
          <div
            v-for="tool in exercice.necessaryTools"
            :key="tool.name"
            class="list-item"
          >
            <li>{{ tool.name }}</li>
          </div>
        </ul>
      </div>
    </div>
    <footer class="card-footer">
      <a
        v-if="this.exercice.Etat == '0'"
        v-on:click="start()"
        class="card-footer-item"
        >Commencer</a
      >
      <a
        v-if="this.exercice.Etat == '1'"
        v-on:click="end()"
        class="card-footer-item"
        >Terminer</a
      >
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

  async mounted() {
    this.exercice = await this.$exerciceRepository.getExercice(this.idExercice);
  },

  data() {
    return {
      exercice: {},
    };
  },

  methods: {
    start() {
      const dateDebutReel = setFormatDate(new Date());
      this.$exerciceRepository.updateEtat(this.exercice.Id, 1);
      console.log("Je commence l'exo", dateDebutReel);
    },
    end() {
      const dateFinReel = setFormatDate(new Date());
      this.$exerciceRepository.updateEtat(this.exercice.Id, 2);
      console.log("Je termine l'exo", dateFinReel);
    },
  },
};
</script>

<style></style>
