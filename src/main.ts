import { createApp, h } from 'vue'
import './style.css'

import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'


const app = createApp({
    setup() {
    },

    render: () => h(App)
});

app.use(createPinia())
app.use(router)

app.mount('#app')
