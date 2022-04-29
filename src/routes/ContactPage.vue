<template>
    <div>
        <div class="columns is-multiline">
            <StagiaireCard class="column is-half-tablet" />
            <CoachCard class="column is-half-tablet" />
            <SendMailCard class="column is-12" />
        </div>
    </div>
</template>

<script>
import StagiaireCard from "../components/StagiaireCard.vue";
import CoachCard from "../components/CoachCard.vue";
import SendMailCard from "../components/SendMailCard.vue";
export default {
    components: {
        StagiaireCard,
        CoachCard,
        SendMailCard,
    },
};
</script>

<style></style>
