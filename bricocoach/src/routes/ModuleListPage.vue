<template>
    <div>
        <h1 class="title is-1">{{ $t("titles.modules") }}</h1>
        <div v-for="m in this.$moduleRepository.getModulesStagiaire(0)" v-bind:key="m.id">
            <router-link :to="{name: 'Module', params: {id: m.id }}">{{ m.title }}</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>