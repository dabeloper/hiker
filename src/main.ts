import './assets/main.css'

import * as firebase from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

import { i18n as messages } from './constants/i18n'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import environments from './environments'
import AnalyticsService from './services/AnalyticsService'

let locale = 'en'
const userLang = navigator.language
if (userLang?.indexOf('es') === 0) {
  locale = 'es'
}
const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale,
  messages: messages
})
const firebaseApp = firebase.initializeApp(environments.firebaseConfig)

app.use(createPinia())
app.use(router)
app.use(i18n)
const analytics = getAnalytics(firebaseApp)
AnalyticsService.getInstance(analytics)
app.config.globalProperties.$db = getFirestore(firebaseApp)
app.config.globalProperties.$analytics = analytics

app.mount('#app')
