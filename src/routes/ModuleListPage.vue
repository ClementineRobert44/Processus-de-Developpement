<template>
  <div>
    <h1 class="title is-1">{{ $t("titles.modules") }}</h1>

    <div
      class="columns is-centered containerModule"
      v-for="m in this.$moduleRepository.getModulesStagiaire(0)"
      v-bind:key="m.id"
    >
      <div class="columns column is-three-quarters">
        <router-link
          :to="{ name: 'Module', params: { id: m.id } }"
          class="column is-10 moduleBox"
          >{{ m.title }}

          <div>Durée : 100 heures</div>
        </router-link>
        <div
          :class="{
            'column notStart': m.advancement == 0,
            'column inProgress': m.advancement == 1,
            'column finish': m.advancement == 2,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
