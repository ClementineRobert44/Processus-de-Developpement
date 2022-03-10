<template>
    <router-link :to="{ name: 'Exercice', params:{idE: ' '} }">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ this.exercice.title }}</p>
                        <p class="subtitle is-6">{{ this.exercice.id }}</p>
                    </div>
                </div>
                <div class="content">
                    {{ this.description }}
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    data () {

    },

    props: {
        exercice: Object
    }

}
</script>

<style>

</style>