<template>
  <ModuleCard :module="this.$moduleRepository.getModuleById(id)" />
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
};
</script>

<style></style>
