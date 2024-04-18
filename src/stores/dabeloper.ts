import { defineStore } from 'pinia'
import { getCurrentInstance } from 'vue'
import { getDocs, collection } from 'firebase/firestore'
import { useI18n } from 'vue-i18n'
import type { DataModel } from '@/models/data.model'
import cookie from '../services/CookieService'
import environments from '../environments'

const hikes: DataModel[] = []
const quotes: DataModel[] = []
const lang: string = 'en'

export const useDabeloperStore = defineStore('dabeloper', {
  state: () => ({
    hikes,
    quotes,
    lang
  }),
  actions: {
    setup() {},
    async fetchData() {
      const i18nLocale = useI18n()
      this.lang = i18nLocale.locale.value
      const dbc = cookie.getCookie(environments.cookieId)
      const dbl = localStorage.getItem(environments.cookieId)
      let data: DataModel[] = []
      if (!!dbc && !!dbl && parseInt(dbc) > 10) {
        data = JSON.parse(dbl)
      } else {
        const db = getCurrentInstance()?.appContext.config.globalProperties.$db
        const coll = collection(db, environments.firebaseCollection)
        await getDocs(coll).then((querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            const hike = doc.data()
            data.push(hike)
          })
        })
        localStorage.setItem(environments.cookieId, JSON.stringify(data))
        cookie.setCookie({
          name: environments.cookieId,
          value: data.length,
          secure: true,
          expireDays: 5
        })
      }

      this.hikes = data.filter((hike) => hike.lang === this.lang)
      this.quotes = this.hikes.filter((hike) => !!hike.quote)
      return data.length
    }
  },
  getters: {}
})
