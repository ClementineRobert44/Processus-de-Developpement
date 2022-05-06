function init(plugin, options) {
  console.log("Installing ExerciceRepository with options : ");
  console.log(options);
  console.log("----------");
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$exerciceRepository = {
      /** Retourne un Object représentant un exercice par son id */
      async getExercice(idExercice) {
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices"); // Dans le template, la feuille 5 est la feuille "Exercices"

        var fieldsRow = exerciceSheet.data[0].rowData[0];
        var exerciceRow = await this.exerciceExists(idExercice);
        console.log(exerciceRow);

        if (exerciceRow) {
          return this.createFromRow(exerciceRow, fieldsRow);
        } else {
          console.log(`Exercice with id ${idExercice} not found.`);
          return null;
        }
      },

      /** Retourne les exercices d'un stagiaire */
      async getExercices() {
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices"); // Dans le template, la feuille 5 est la feuille "Exercices"

        var fieldsRow = exerciceSheet.data[0].rowData[0];
        var ret = [];
        exerciceSheet.data[0].rowData.map((e) => ret.push(this.createFromRow(e, fieldsRow)));
        return ret;
      },

      /* Retourne les exercices d'un module */
      async getExercicesModule(idModule) {
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices"); // Dans le template, la feuille 5 est la feuille "Exercices"

        var fieldsRow = exerciceSheet.data[0].rowData[0];
        var ret = [];
        exerciceSheet.data[0].rowData.filter((e) => e.values[1].formattedValue == idModule).map((e) => ret.push(this.createFromRow(e, fieldsRow)));
        return ret;
      },

      /**
       * Retourne un objet de type SheetRow si un exercice correspond à l'id passé.
       * Retourne NULL sinon.
       */
      async exerciceExists(idExercice) {
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices");

        return exerciceSheet.data[0].rowData.find((e) => e.values[0].formattedValue == idExercice);
      },

      /* Change l'état d'un exercice */
      async updateEtat(idExercice, newEtat, date) {
        var sheetName = "Exercices";
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices");
        var cellCol = app.config.globalProperties.$sheetsStructure.sheets.exercices.col.Etat;
        var cellRow = null;
        var index = 1;

        while (!cellRow && exerciceSheet.data[0].rowData.length > index) {
          var row = exerciceSheet.data[0].rowData[index];

          if (row.values[0].formattedValue == idExercice) cellRow = index + 1;
          // + 1 car les exercices commencent à la ligne 2 dans le Sheets
          else index++;
        }

        if (!cellRow) return;

        var cellCoordinates = `${sheetName}!${cellCol}${cellRow}`;
        await app.config.globalProperties.$sheetsApi.updateCell(cellCoordinates, newEtat);

        if (newEtat == 1) {
          cellCol = app.config.globalProperties.$sheetsStructure.sheets.exercices.col.DateDebutReel;
        } else if (newEtat == 2) {
          cellCol = app.config.globalProperties.$sheetsStructure.sheets.exercices.col.DateFinReel;
        }

        cellCoordinates = `${sheetName}!${cellCol}${cellRow}`;
        await app.config.globalProperties.$sheetsApi.updateCell(cellCoordinates, date);
      },

      async addCommentaire(comment, idExercice) {
        var sheetName = "Exercices";
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices");
        var cellCol = app.config.globalProperties.$sheetsStructure.sheets.exercices.col.Commentaire;
        var cellRow = null;
        var index = 1;

        while (!cellRow && exerciceSheet.data[0].rowData.length > index) {
          var row = exerciceSheet.data[0].rowData[index];

          if (row.values[0].formattedValue == idExercice) cellRow = index + 1;
          // + 1 car les exercices commencent à la ligne 2 dans le Sheets
          else index++;
        }

        if (!cellRow) return;

        var cellCoordinates = `${sheetName}!${cellCol}${cellRow}`;
        await app.config.globalProperties.$sheetsApi.updateCell(cellCoordinates, comment);
      },

      async addTypeCommentaire(typComment, idExercice) {
        var sheetName = "Exercices";
        var exerciceSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Exercices");
        var cellCol = app.config.globalProperties.$sheetsStructure.sheets.exercices.col.TypeCommentaire;
        var cellRow = null;
        var index = 1;

        while (!cellRow && exerciceSheet.data[0].rowData.length > index) {
          var row = exerciceSheet.data[0].rowData[index];

          if (row.values[0].formattedValue == idExercice) cellRow = index + 1;
          // + 1 car les exercices commencent à la ligne 2 dans le Sheets
          else index++;
        }

        if (!cellRow) return;

        var cellCoordinates = `${sheetName}!${cellCol}${cellRow}`;
        await app.config.globalProperties.$sheetsApi.updateCell(cellCoordinates, typComment);
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

    init(app.config.globalProperties.$exerciceRepository, options);
  },
};
