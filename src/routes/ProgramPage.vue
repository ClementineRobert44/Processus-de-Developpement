<template>
  <div>
    <h1 class="title is-1">{{ $t("titles.modules") }}</h1>
    <ModuleCard v-for="m in this.listModules" v-bind:key="m.Id"
        :idModule="m.Id"
    />
  </div>
</template>

<script>
import ModuleCard from '../components/Program/ModuleCard.vue'
export default {
    components: {
        ModuleCard
    },

    data () {
        return {
            listModules : []
        }
    },

    async mounted() {
        this.listModules = await this.$moduleRepository.getModules();
    }
};
</script>

<style>

</style>
