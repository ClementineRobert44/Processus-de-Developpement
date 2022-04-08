function init(app, options) {}

export default {
    install: (app, options) => {
        init(app, options);
        app.config.globalProperties.$stagiaireRepository = {
            async getstagiaire() {
                var stagiaireSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName(app.config.globalProperties.$sheetsStructure.sheets.stagiaire.name);
                return createFromRow(stagiaireSheet.data[0].rowData[1], stagiaireSheet.data[0].rowData[0]);
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
