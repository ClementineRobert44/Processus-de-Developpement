<template>
    <router-link
        :to="{
            name: 'Exercice',
            params: {
                idE: exercice.Id,
            },
        }"
    >
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">
                            <span class="numberExercice">{{ this.idStep }}.</span>
                            {{ this.exercice.Titre }}
                        </p>
                    </div>
                </div>
                <div class="content">
                    {{ this.exercice.Description }}
                </div>
            </div>
            <div
                :class="{
                    'avancement isNotStart': this.exercice.Etat == '0',
                    'avancement isInProgress': this.exercice.Etat == '1',
                    'avancement isFinish': this.exercice.Etat == '2',
                }"
            ></div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        idStep: String,
        exercice: [],
    },
};
</script>

<style>
.numberExercice {
    color: #f07969;
}

.avancement {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 1em;
}

.isNotStart {
    background-color: #d05252;
    color: #d05252;
}

.isInProgress {
    background-color: #e1a751;
    color: #e1a751;
}

.isFinish {
    background-color: #63d052;
    color: #63d052;
}
</style>
