<template>
    <div>
        <div v-if="this.spreadSheetId">
            <h1 class="title is-1">{{ $t("google.sheetSet") }}</h1>
            <h4 class="title is-4" style="color: white">{{ this.spreadSheetId }}</h4>
            <button class="button is-primary" @click="this.onChangeSheetClick()">{{ $t("labels.change") }}</button>
            <!-- TODO : Afficher quelque chose (exos en cours ?) -->
        </div>
        <div v-else>
            <h4 class="title is-4" style="color: white">{{ $t("labels.enterSpreadsheet") }}</h4>
            <input ref="inputSheet" class="input" style="text-align: center" type="text" placeholder="Text input" /> <button class="button is-primary" @click="this.onConfirmSheetClick()">{{ $t("labels.confirm") }}</button>
        </div>
        <div class="columns">
            <div v-if="this.error" class="notification is-danger column is-half is-offset-3">{{ $t("labels.sheetNotFound") }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    components: {},
    data() {
        return {
            spreadSheetId: null,
            error: false,
        };
    },
    beforeMount() {
        this.spreadSheetId = this.getSpreadsheetId();
    },

    methods: {
        getSpreadsheetId() {
            return this.$sheetsApi.getSpreadsheetId();
        },
        async saveSpreadsheet(id) {
            return await this.$sheetsApi.setSpreadsheetId(id);
        },
        controlSheetId(id) {
            return !(id == null || id == "");
        },

        onChangeSheetClick() {
            this.spreadSheetId = null;
        },
        async onConfirmSheetClick() {
            var id = this.$refs.inputSheet.value;
            var result;
            if (this.controlSheetId(id)) {
                result = await this.saveSpreadsheet(id);
                if (result == true) {
                    location.reload();
                } else {
                    this.error = true;
                }
            } else {
                this.error = true;
            }
        },
    },
};
</script>

<style></style>
