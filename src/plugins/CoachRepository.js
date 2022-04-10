function init(plugin, options) {
    console.log("Installing CoachRepository with options : ");
    console.log(options);
    console.log("----------");
}

export default {
    install: (app, options) => {
        init(app, options);
        app.config.globalProperties.$coachRepository = {
            async getCoach() {
                var coachSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName(app.config.globalProperties.$sheetsStructure.sheets.coach.name);
                return this.createFromRow(coachSheet.data[0].rowData[1], coachSheet.data[0].rowData[0]);
            },

            /** Retourne un objet JSON à partir d'une row de sheet Google
             * @param row row de la feuille de calcul à passer pour créer un objet
             * @param fields champs de la feuille (la première ligne de la feuille)
             */
            createFromRow(row, fields) {
                var ret = {};
                fields.values.map((e, i) => {
                    if (row.values[i]) ret[e.formattedValue] = row.values[i].formattedValue;
                });
                return ret;
            },
        };
    },
};
