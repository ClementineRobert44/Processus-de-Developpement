<template>
  <ModuleCard :module="this.$moduleRepository.getModuleById(0)" />
</template>

<script>
import ModuleCard from '../components/ModuleCard.vue'
export default {
    components: {
        ModuleCard
    }

}
</script>

<style>

</style>