export default {
    install: (app) => {
        app.config.globalProperties.$sheetsStructure = {
            sheets: {
                coach: {
                    name: "Coach",
                    col: {
                        Nom: "A",
                        Prenom: "B",
                        Site: "C",
                        LogoSite: "D",
                        CompteGoogle: "E",
                        Description: "F",
                    },
                },
                stagiaire: {
                    name: "Stagiaire",
                    col: { Nom: "A", Prenom: "B", CompteGoogle: "C" },
                },
                configuration: {
                    name: "Configuration",
                    col: { Locale: "A", Theme: "B" },
                },
                programme: {
                    name: "Programme",
                    col: { Titre: "A" },
                },
                modules: {
                    name: "Modules",
                    col: { id: "A", titre: "B", description: "C", image: "D" },
                },
                exercices: {
                    name: "Exercices",
                    col: {
                        Id: "A",
                        IdModule: "B",
                        Titre: "C",
                        Etat: "D",
                        DateDebutPrev: "E",
                        DateDebutReel: "F",
                        DateFinPrev: "G",
                        DateFinReel: "H",
                        Type: "I",
                        TypeCommentaire: "J",
                        Commentaire: "K",
                        Feedback: "L",
                        NecessaryTools: "M",
                        Description: "N",
                        Duree: "O",
                    },
                },
            },
        };
    },
};
