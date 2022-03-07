import { createI18n } from 'vue-i18n'

/* Ajouter ici les langages et les traductions supplémentaires */
/*
    xx: {
        titles: {
            home: '',
            exercices: '',
            achievements: '',
            contact: '',
        },
    },

*/

const messages = {
    en: {
        titles: {
            home: 'Home',
            exercices: 'My Exercices',
            achievements: 'Achievements',
            contact: 'Contact',
        },
    },
    fr: {
        titles: {
            home: 'Accueil',
            exercices: 'Mes Exercices',
            achievements: 'Trophées',
            contact: 'Contact',
        },
    },
}



const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: messages,
})


export default i18n;