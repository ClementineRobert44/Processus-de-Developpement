<template>
    <CommentCard :idModule="this.$route.params.id" />
</template>

<script>
import CommentCard from "../components/CommentCard.vue";
export default {
    components: {
        CommentCard,
    },
};
</script>
