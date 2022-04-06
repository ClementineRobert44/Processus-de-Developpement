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
        var moduleSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Modules");
                
        var fieldsRow = moduleSheet.data[0].rowData[0];
        var moduleRow = moduleSheet.data[0].rowData.find(e => e.values[0].formattedValue == idModule);

        if(moduleRow) {
            return this.createFromRow(moduleRow, fieldsRow);
        }
        else {
            console.log(`Module with id ${idModule} not found.`);
            return null;
        }
},

      async getModules() {
        var moduleSheet = await app.config.globalProperties.$sheetsApi.getSheetWithName("Modules");
                        
        var fieldsRow = moduleSheet.data[0].rowData[0];
        var ret = [];
        moduleSheet.data[0].rowData.slice(1, moduleSheet.data[0].rowData.length).map((e) => ret.push(this.createFromRow(e, fieldsRow)));
        return ret;
    },

    /** Retourne un objet JSON à partir d'une row de sheet Google
     * @param row row de la feuille de calcul à passer pour créer un objet
     * @param fields champs de la feuille (la première ligne de la feuille)
     */
            createFromRow(row, fields) {
            var ret = {};
            fields.values.map((e, i) => {
                if(row.values[i])
                    ret[e.formattedValue] = row.values[i].formattedValue;

                    // Calculer l'avancement
                    app.config.globalProperties.$exerciceRepository.getExercicesModule(ret.id)
                    .then(e => {
                        var sum = 0;
                        e.map(ex => sum += parseInt(ex.etat));
                        if(sum == 0)
                            ret.avancement = 0;
                        else if(sum == e.length * 2)
                            ret.avancement = 2;
                        else ret.avancement = 1;
                    });
            });

            return ret; 
        }    
    };
  },
};
