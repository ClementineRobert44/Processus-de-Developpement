import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Configuration from './config.js'

import i18n from './plugins/i18n.js'
import exerciceRepository from './plugins/ExerciceRepository.js'
import moduleRepository from './plugins/ModuleRepository.js'

const app = createApp(App);


app.use(router);
app.use(i18n);
app.use(exerciceRepository, Configuration.ApiKey);
app.use(moduleRepository, Configuration.ApiKey);

app.mount('#app')
