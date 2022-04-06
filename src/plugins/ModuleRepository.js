function init(options) {
    console.log("Installing ModuleRepository with options : ");
    console.log(options);
    console.log("----------");
}

export default {
  install: (app, options) => {
      init(options);
    app.config.globalProperties.$moduleRepository = {
      /** Retourne un exercice par son id */
      getModule: (idModule) => {
        console.log(idModule);
        return null;
      },

      /** Retourne les exercices d'un stagiaire */
      getModuleById: (id) => {
        console.log(id);
        // return null;
        return app.config.globalProperties.$moduleRepository.getModulesStagiaire(
          0
        )[id];
      },

      getModulesStagiaire: () => {
        var modules = [
          {
            id: "0",
            title: "Comment construire un vaisseau spatial ?",
            advancement: 0,
            exercices: [
              {
                id: "0",
                title: "Planter un clou",
                description: "Planter le clou c'est important",
                advancement: 0,
                duree: "1h",
                dateDebutPrev: "24/04/2022",
                dateFinPrev: "26/05/2022",
                necessaryTools: [
                  {
                    name: "Clou de 5cm",
                  },
                  {
                    name: "Marteau",
                  },
                ],
              },
              {
                id: "1",
                title: "Couper une planche",
                description:
                  "Comment couper une planche en bois, avec une scie sauteuse ?",
                advancement: 2,
              },
              {
                id: "2",
                title: "Fabriquer une étagère",
                description:
                  "A partir de clous et de planches coupées, comment faire une étagère ?",
                advancement: 1,
              },
              {
                id: "3",
                title: "Construire un vaisseau spatial",
                description:
                  "A partir de clous et d'une étagère en bois, comment fabriquer un vaisseau spatial ?",
                advancement: 0,
              },
            ],
          },

          {
            id: "1",
            title: "Comment construire une étagère ?",
            advancement: 1,
            exercices: [
              {
                id: "0",
                title: "Planter un clou",
                description:
                  "Comment planter un clou dans une planche en bois ?",
              },
              {
                id: "1",
                title: "Couper une planche",
                description:
                  "Comment couper une planche en bois, avec une scie sauteuse ?",
              },
              {
                id: "2",
                title: "Fabriquer une étagère",
                description:
                  "A partir de clous et de planches coupées, comment faire une étagère ?",
              },
              {
                id: "3",
                title: "Construire un vaisseau spatial",
                description:
                  "A partir de clous et d'une étagère en bois, comment fabriquer un vaisseau spatial ?",
              },
            ],
          },
          {
            id: "2",
            title: "Comment construire une table ?",
            advancement: 2,
            exercices: [
              {
                id: "0",
                title: "Planter un clou",
                description:
                  "Comment planter un clou dans une planche en bois ?",
              },
              {
                id: "1",
                title: "Couper une planche",
                description:
                  "Comment couper une planche en bois, avec une scie sauteuse ?",
              },
              {
                id: "2",
                title: "Fabriquer une étagère",
                description:
                  "A partir de clous et de planches coupées, comment faire une étagère ?",
              },
              {
                id: "3",
                title: "Construire un vaisseau spatial",
                description:
                  "A partir de clous et d'une étagère en bois, comment fabriquer un vaisseau spatial ?",
              },
            ],
          },
        ];
        return modules;
      },
    };
  },
};
