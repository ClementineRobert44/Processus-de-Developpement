export default {
  install: (app) => {
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

      getModulesStagiaire: (idStagiaire) => {
        console.log(idStagiaire);
        var modules = [
          {
            id: "0",
            title: "Comment construire un vaisseau spatial ?",
            advancement: "inProgress",
            exercices: [
              {
                id: "0",
                title: "Planter un clou",
                description: "Planter le clou c'est important",
                advancement: "notStart",
                duree: "1h",
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
                advancement: "finish",
              },
              {
                id: "2",
                title: "Fabriquer une étagère",
                description:
                  "A partir de clous et de planches coupées, comment faire une étagère ?",
                advancement: "inProgress",
              },
              {
                id: "3",
                title: "Construire un vaisseau spatial",
                description:
                  "A partir de clous et d'une étagère en bois, comment fabriquer un vaisseau spatial ?",
                advancement: "notStart",
              },
            ],
          },

          {
            id: "1",
            title: "Comment construire une étagère ?",
            advancement: "notStart",
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
            advancement: "finish",
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
