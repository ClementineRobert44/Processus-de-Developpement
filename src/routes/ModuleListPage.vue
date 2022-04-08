<template>
  <div>
    <h1 class="title is-1">{{ $t("titles.modules") }}</h1>

    <div
      class="columns is-centered containerModule"
      v-for="m in this.modules"
      v-bind:key="m.id"
    >
      <div class="columns column is-three-quarters">
        <router-link
          :to="{ name: 'Module', params: { id: m.id } }"
          class="column is-10 moduleBox"
          >{{ m.titre }}

          <div>Nombre d'exercices: {{ getNbExercices(m.id) }}</div>
        </router-link>
        <div
          :class="{
            'column notStart': m.avancement == 0,
            'column inProgress': m.avancement == 1,
            'column finish': m.avancement == 2,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: [],
      nbExercices: Number,
    };
  },

  async mounted() {
    this.modules = await this.$moduleRepository.getModules();
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
