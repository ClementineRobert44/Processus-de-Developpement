export default {
    install: (app) => {
        app.config.globalProperties.$exerciceRepository = {

            /** Retourne un exercice par son id */
            getExercice: (idExercice) => {
                console.log(idExercice);
                return null;
            },

            /** Retourne les exercices d'un stagiaire */
            getExercicesStagiaire: (idStagiaire) => {
                console.log(idStagiaire);
                return null;
            }
        };
    }
};