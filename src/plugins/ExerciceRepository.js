function init(plugin, options) {
	console.log("Installing ExerciceRepository with options : ");
	console.log(options);
	console.log("----------"); 
}

export default {
	install: (app, options) => {
		app.config.globalProperties.$exerciceRepository = {
			/** Retourne un exercice par son id */
			getExercice(idExercice) {	
                var exerciceSheet = app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices"); // Dans le template, la feuille 5 est la feuille "Exercices"
                
                var fieldsRow = exerciceSheet.data[0].rowData[0];
                var exerciceRow = exerciceSheet.data[0].rowData.find(e => e.values[0].formattedValue == idExercice);

                if(exerciceRow) {
                    return this.createFromRow(exerciceRow, fieldsRow);
                }
                else {
                    console.log(`Exercice with id ${idExercice} not found.`);
                    return null;
                }
			},

			/** Retourne les exercices d'un stagiaire */
            getExercices() {
                var exerciceSheet = app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices"); // Dans le template, la feuille 5 est la feuille "Exercices"
                        
                var fieldsRow = exerciceSheet.data[0].rowData[0];
                var ret = [];
                exerciceSheet.data[0].rowData.map((e) => ret.push(this.createFromRow(e, fieldsRow)));
            },


            /** Retourne un objet JSON à partir d'une row de sheet Google
             * @param row row de la feuille de calcul à passer pour créer un objet
             * @param fields champs de la feuille (la première ligne de la feuille)
             */
            createFromRow(row, fields) {
                var ret = {};
                fields.values.map((e, i) => {
                    ret[e.formattedValue] = row.values[i].formattedValue;
                });
                return ret; 
            }
        };
		
        init(app.config.globalProperties.$exerciceRepository, options);
    },
};
