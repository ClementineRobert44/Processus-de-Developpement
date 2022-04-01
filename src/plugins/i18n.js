import { createI18n } from 'vue-i18n'


const messages = {
    /* Ajouter ici les langages et les traductions supplémentaires */
    /* Exemple de format */
    xx: {
        titles: {
            home: '',
            exercices: '',
            modules: '',
            achievements: '',
            contact: '',
            language: '',
        },
    },
    en: {
        titles: {
            home: 'Home',
            exercices: 'My Exercices',
            modules: 'My Modules',
            achievements: 'Achievements',
            contact: 'Contact',
            language: 'Language',
        },
    },
    fr: {
        titles: {
            home: 'Accueil',
            exercices: 'Mes Exercices',
            modules: 'Mes Modules',
            achievements: 'Trophées',
            contact: 'Contact',
            language: 'Langue',
        },
    },
}


const savedLocale = localStorage.getItem('locale');


const i18n = createI18n({
    locale: savedLocale ?? 'fr',
    fallbackLocale: 'en',
    messages: messages,    
})


export default i18n;