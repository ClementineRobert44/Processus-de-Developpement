import { createI18n } from "vue-i18n";

const messages = {
    /* Ajouter ici les langages et les traductions supplémentaires */
    /* Exemple de format */
    xx: {
        titles: {
            home: "",
            exercices: "",
            modules: "",
            achievements: "",
            contact: "",
            language: "",
            client: "",
            coach: "",
        },
        google: {
            signin: "",
            signout: "",
            notConnected: "",
            sheetSet: "",
        },
        labels: {
            change: "",
            enterSpreadsheet: "",
            confirm: "",
            sheetNotFound: "",
            inProgress: "",
            finished: "",
        },
    },
    en: {
        titles: {
            home: "Home",
            exercices: "My Exercices",
            modules: "My Modules",
            achievements: "Achievements",
            contact: "Contact",
            language: "Language",
            client: "Your information",
            coach: "Your Coach",
        },
        google: {
            signin: "Sign in",
            signout: "Sign out",
            notConnected: "Please sign in",
            sheetSet: "You set the sheet to :",
        },
        labels: {
            change: "Change",
            enterSpreadsheet: "Enter the Google Sheets ID :",
            confirm: "Confirm",
            sheetNotFound: "Couldn't find sheet with this ID",
            inProgress: "In Progress",
            finished: "Finished",
        },
    },
    fr: {
        titles: {
            home: "Accueil",
            exercices: "Mes Exercices",
            modules: "Mes Modules",
            achievements: "Trophées",
            contact: "Contact",
            language: "Langue",
            client: "Vos informations",
            coach: "Votre Coach",
        },
        google: {
            signin: "Connexion",
            signout: "Déconnexion",
            notConnected: "Veuillez vous connecter",
            sheetSet: "Vous avez renseigné la feuille :",
        },
        labels: {
            change: "Changer",
            enterSpreadsheet: "ID du document Google Sheets :",
            confirm: "Confirmer",
            sheetNotFound: "Aucun document avec cet ID n'a été trouvé",
            inProgress: "En Cours",
            finished: "Terminé",
        },
    },
};

const savedLocale = localStorage.getItem("locale");

const i18n = createI18n({
    locale: savedLocale ?? "fr",
    fallbackLocale: "en",
    messages: messages,
});

export default i18n;
