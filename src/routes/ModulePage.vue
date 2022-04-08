<template>
  <ModuleDetailCard
    :idModule="this.$route.params.id"/>
</template>

<script>
import ModuleDetailCard from "../components/Program/ModuleDetailCard.vue";
export default {
  components: {
    ModuleDetailCard,
  },
  props: {
    idModule: String,
  },
};
</script>

<style></style>
