<template>
    <div>
        <div v-if="this.isSpreadsheetSet">
            Fiche enregistrée
            <button @click="this.test(this.$exerciceRepository.getExercice(1))">Test ExerciceRepository</button>
            <!-- TODO : Afficher quelque chose (exos en cours ?) -->
        </div>
        <div v-else>            
            Saisir fiche : <input ref="inputSheet"/><button @click="this.saveSpreadsheet()">Ok</button>
        </div>        
    </div>
</template>

<script>
export default {
    name: "Index",
    components: {
    },

    methods : {
        saveSpreadsheet() {
            this.$sheetsApi.setSpreadsheetId(this.$refs.inputSheet.value);
        },

        test(a) {
            console.log(a);
        }
    },

    computed: {
        isSpreadsheetSet() {
            return this.$sheetsApi.getSpreadsheetId();
        }
    }
}
</script>

<style>

</style>