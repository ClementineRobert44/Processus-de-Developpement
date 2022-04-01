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
        google: {
            signin: '',
            signout: ''
        }

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
        google: {
            signin: 'Sign in',
            signout: 'Sign out'
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
        google: {
            signin: 'Connexion',
            signout: 'Déconnexion'
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