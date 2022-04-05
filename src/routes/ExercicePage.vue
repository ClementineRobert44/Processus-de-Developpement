<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ detailsExercice.title }}</p>
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
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>

      <div class="content">Durée : {{ detailsExercice.duree }}</div>

      <h2>Outils à utiliser</h2>

      <div v-for="tool in detailsExercice.necessaryTools" :key="tool.name">
        {{ tool.name }}
      </div>
    </div>
    <footer class="card-footer">
      <a v-on:click="start()" class="card-footer-item">Commencer</a>
      <a v-on:click="end()" class="card-footer-item">Terminer</a>
      <a v-on:click="contact()" class="card-footer-item"
        >Envoyer un message au coach</a
      >
    </footer>
  </div>
</template>

<script>
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
    console.log(this.detailsExercice.necessaryTools);
  },

  methods: {
    start() {
      console.log("Je commence l'exo");
    },
    end() {
      console.log("Je termine l'exo");
    },
    contact() {
      console.log("Je contacte le coach");
    },
  },
};
</script>

<style></style>
