<template>
  <ModuleCard
    :id="this.module.id"
    :titre="this.module.titre"
    :description="this.module.description"
    :image="this.module.image" />
</template>

<script>
import ModuleCard from "../components/ModuleCard.vue";
export default {
  components: {
    ModuleCard,
  },
  props: {
    id: String,
  },

  data () {
      return {
          module : {}
      }
  },
  
    async mounted() {
        this.module = await this.$moduleRepository.getModule(this.id);
    }
};
</script>

<style></style>
