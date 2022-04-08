<template>
  <div v-if="this.module" class="columns column is-three-quarters">
    <router-link
      :to="{ name: 'Module', params: { id: this.module.Id } }"
      class="column is-10 moduleBox"
      >{{ this.module.Titre }}

      <div>Nombre d'exercices: {{ getNbExercices(m.id) }}</div>
    </router-link>
    <div
      :class="{
        'column notStart': this.module.Avancement == 0,
        'column inProgress': this.module.Avancement == 1,
        'column finish': this.module.Avancement == 2,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      module: null,
      nbExercices: Number,
    };
  },

  props: {
    idModule: String,
  },

  async mounted() {
    this.module = await this.$moduleRepository.getModule(this.idModule);
  },

  methods: {
    getNbExercices(idModule) {
      this.$exerciceRepository
        .getExercicesModule(idModule)
        .then((exercices) => {
          this.nbExercices = exercices.length;
        });
      return this.nbExercices;
    },
  },
};
</script>

<style>
.notStart,
.inProgress,
.finish {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.notStart {
  background-color: #d05252;
}

.inProgress {
  background-color: #e1a751;
}

.finish {
  background-color: #63d052;
}

.moduleBox {
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.column:last-child {
  margin-bottom: 0;
}

a {
  color: black;
}

a:hover {
  color: grey;
}
</style>
