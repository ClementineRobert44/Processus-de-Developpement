<template>
    <div>
        <div class="columns">
            <StagiaireCard class="column is-half-tablet" />
            <CoachCard class="column is-half-tablet" />
        </div>
    </div>
</template>

<script>
import StagiaireCard from "../components/StagiaireCard.vue";
import CoachCard from "../components/CoachCard.vue";
export default {
    components: {
        StagiaireCard,
        CoachCard,
    },
};
</script>

<style></style>
