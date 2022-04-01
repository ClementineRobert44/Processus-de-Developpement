import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import gAuthPlugin from 'vue3-google-oauth2';

import Configuration from './config.js'

import i18n from './plugins/i18n.js'
import SheetsAPI from './plugins/SheetsAPI.js'
import exerciceRepository from './plugins/ExerciceRepository.js'
import moduleRepository from './plugins/ModuleRepository.js'

const app = createApp(App);

const gauthClientId = "224038039367-oms0sqijnsejlknamgtsg0jllf1k0qr6.apps.googleusercontent.com";

app.use(
    gAuthPlugin, {
    clientId: gauthClientId,
    scope: `profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly`,
    prompt: 'consent',
    fetch_basic_profile: false});
app.use(router);
app.use(i18n);
app.use(SheetsAPI);
app.use(exerciceRepository, Configuration.APIKey);
app.use(moduleRepository, Configuration.APIKey);

app.mount('#app')
