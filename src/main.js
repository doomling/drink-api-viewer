import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify.js'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
