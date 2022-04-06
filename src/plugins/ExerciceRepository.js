function init(options) {
  console.log("Installing ExerciceRepository with options : ");
  console.log(options);
  console.log("----------");
}

export default {
  install: (app, options) => {
    init(options);
    app.config.globalProperties.$exerciceRepository = {
      /** Retourne un exercice par son id */
      getExercice: (idExercice) => {
        console.log(idExercice);
        return null;
      },

      /** Retourne les exercices d'un stagiaire */
      getExercicesStagiaire: (idStagiaire) => {
        console.log(idStagiaire);
        // return null;
        return [
          {
            id: "1",
            title: "Planter un clou",
            description: "Comment planter un clou dans une planche en bois ?",
            advancement: 0,
          },
          {
            id: "2",
            title: "Couper une planche",
            description:
              "Comment couper une planche en bois, avec une scie sauteuse ?",
            advancement: 1,
          },
          {
            id: "3",
            title: "Fabriquer une étagère",
            description:
              "A partir de clous et de planches coupées, comment faire une étagère ?",
            advancement: 2,
          },
          {
            id: "4",
            title: "Construire un vaisseau spatial",
            description:
              "A partir de clous et d'une étagère en bois, comment fabriquer un vaisseau spatial ?",
            advancement: 0,
          },
        ];
      },
    };
  },
};
