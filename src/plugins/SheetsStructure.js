export default {
    install : (options) => {
        app.config.globalProperties.$sheetsStructure = {
            structure : {
                sheets: {
                    coach: {
                        name: 'Coach',
                        col: { Nom: 'A', Prenom: 'B', Site:'C', LogoSite: 'D', GoogleMail: 'E', Description: 'F' }
                    },
                    stagiaire: {
                        name: 'Stagiaire',
                        col: { Nom:'A', Prenom:'B', CompteGoogle: 'C' }
                    },
                    configuration: {
                        name: 'Configuration',
                        col: { Locale: 'A', Theme: 'B' }
                    },
                    programme: {
                        name: 'Programme',
                        col: { Titre: 'A' }
                    },
                    modules: {
                        name: 'Modules',
                        col: { id: 'A', titre: 'B', description:'C', image: 'D' }
                    },
                    exercices: {
                        name: 'Exercices',
                        col: { Id: 'A', IdModule: 'B', Titre:'C', Etat: 'D', DateDebutPrev: 'E', DateDebutReel: 'F',  DateFinPrev: 'G', DateFinReel: 'H',  Type: 'I', Commentaire: 'J',  Feedback: 'K', NecessaryTools: 'L',  Description: 'M', Duree: 'N', }
                    },
                }
            }
        }
    }
}