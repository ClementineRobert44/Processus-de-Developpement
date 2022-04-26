<template>
    <div>
        <h1 class="title is-1">{{ $t("titles.modules") }}</h1>
        <h2 class="title is-2" style="color: white">{{ $t("labels.inProgress") }}</h2>
        <ModuleCard v-for="m in this.getListToDoModules" v-bind:key="m.Id" :idModule="m.Id" />
        <h2 class="title is-2" style="color: white">{{ $t("labels.finished") }}</h2>
        <ModuleCard v-for="m in this.getListFinishedModules" v-bind:key="m.Id" :idModule="m.Id" />
    </div>
</template>

<script>
import ModuleCard from "../components/Program/ModuleCard.vue";
export default {
    components: {
        ModuleCard,
    },

    data() {
        return {
            listModules: [],
        };
    },

    computed: {
        getListFinishedModules() {
            var modules = this.listModules.filter((e) => {
                if (e.Avancement == 1) return e;
            });
            return modules;
        },

        getListToDoModules() {
            var modules = this.listModules.filter((e) => {
                if (e.Avancement < 1) return e;
            });
            return modules;
        },
    },

    async mounted() {
        this.listModules = await this.$moduleRepository.getModules();
        console.log(this.listModules);
    },
};
</script>

<style></style>
