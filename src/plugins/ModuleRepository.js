function init(options) {
    console.log("Installing ModuleRepository with options : ");
    console.log(options);
    console.log("----------");
}

export default {
    install: (app, options) => {
        init(options);
        app.config.globalProperties.$moduleRepository = {
            /** Retourne un module par son id */
            async getModule(idModule) {
                var moduleSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName(app.config.globalProperties.$sheetsStructure.sheets.modules.name);

                var fieldsRow = moduleSheet.data[0].rowData[0];
                var moduleRow = moduleSheet.data[0].rowData.find((e) => e.values[0].formattedValue == idModule);

                if (moduleRow) {
                    return await this.createFromRow(moduleRow, fieldsRow);
                } else {
                    console.log(`Module with id ${idModule} not found.`);
                    return null;
                }
            },

            async getModules() {
                var moduleSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName(app.config.globalProperties.$sheetsStructure.sheets.modules.name);

                var fieldsRow = moduleSheet.data[0].rowData[0];
                var ret = [];
                var modules = moduleSheet.data[0].rowData.slice(1, moduleSheet.data[0].rowData.length);
                await modules.forEach(async (e) => {
                    var module = await this.createFromRow(e, fieldsRow);
                    ret.push(module);
                });
                return ret;
            },

            /** Retourne un objet JSON à partir d'une row de sheet Google
             * @param row row de la feuille de calcul à passer pour créer un objet
             * @param fields champs de la feuille (la première ligne de la feuille)
             */
            async createFromRow(row, fields) {
                var ret = {};
                fields.values.map((e, i) => {
                    if (row.values[i]) ret[e.formattedValue] = row.values[i].formattedValue;
                });
                // Calculer l'avancement
                // L'avancement est le pourcentage d'exercices dont l'état est égal à 2 (Terminé)
                var exercices = await app.config.globalProperties.$exerciceRepository.getExercicesModule(ret.Id);
                var sum = 0;
                exercices.map((ex) => {
                    if (ex.Etat == 2) sum++;
                });
                ret.Avancement = sum / exercices.length;

                return ret;
            },
        };
    },
};
