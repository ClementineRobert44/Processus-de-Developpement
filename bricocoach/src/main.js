import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from './plugins/i18n.js'
import ExerciceRepository from './plugins/ExerciceRepository.js'

const app = createApp(App);


app.use(router);
app.use(i18n);
app.use(ExerciceRepository);

app.mount('#app')
