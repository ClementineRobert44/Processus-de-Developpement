import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import gAuthPlugin from "vue3-google-oauth2";

import Configuration from "./Configuration.js";

console.log(Configuration);

import i18n from "./plugins/i18n.js";
import SheetsStructure from "./plugins/SheetsStructure.js";
import SheetsAPI from "./plugins/SheetsAPI.js";
import MailAPI from "./plugins/MailAPI.js";

import exerciceRepository from "./plugins/ExerciceRepository.js";
import moduleRepository from "./plugins/ModuleRepository.js";
import stagiaireRepository from "./plugins/StagiaireRepository.js";
import coachRepository from "./plugins/CoachRepository.js";

const app = createApp(App);

const gauthClientId = "224038039367-oms0sqijnsejlknamgtsg0jllf1k0qr6.apps.googleusercontent.com";

app.use(gAuthPlugin, {
    clientId: gauthClientId,
    scope: `profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.compose`,
    prompt: "consent",
    fetch_basic_profile: false,
});

app.use(router);
app.use(i18n);

app.use(SheetsStructure);
app.use(SheetsAPI, Configuration.API.SHEETS);
app.use(MailAPI, Configuration.API.GMAIL);

app.use(exerciceRepository);
app.use(moduleRepository);
app.use(stagiaireRepository);
app.use(coachRepository);

app.mount("#app");
