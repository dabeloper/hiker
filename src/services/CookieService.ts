export default {
  getCookie(name: string): string {
    try {
      const ca: Array<string> = document.cookie.split(';')
      const caLen: number = ca.length
      const cookieName = `${name}=`
      let c: string

      for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '')
        if (c.indexOf(cookieName) == 0) {
          return c.substring(cookieName.length, c.length)
        }
      }
    } catch (e) {
      /* empty */
    }
    return ''
  },

  deleteCookie(cookieName: string): void {
    this.setCookie({ name: cookieName, value: '', expireDays: -1 })
  },

  setCookie(params: any): void {
    try {
      const d: Date = new Date()
      d.setTime(d.getTime() + (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000)
      document.cookie =
        (params.name ? params.name : '') +
        '=' +
        (params.value ? params.value : '') +
        ';' +
        (params.session && params.session == true ? '' : 'expires=' + d.toUTCString() + ';') +
        'path=' +
        (params.path && params.path.length > 0 ? params.path : '/') +
        ';' +
        'Secure;SameSite=None'
    } catch (e) {
      /* empty */
    }
  }
}
