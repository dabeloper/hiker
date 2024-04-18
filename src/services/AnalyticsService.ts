import 'firebase/analytics'
import { AnalyticsEvents } from '../constants/analytics'
import { logEvent, type Analytics } from 'firebase/analytics'

class AnalyticsService {
  private static instance: AnalyticsService

  public static getInstance(analytics: Analytics): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService(analytics)
    }
    return AnalyticsService.instance
  }

  constructor(private analytics: Analytics) {}

  trackMenuHome(): void {
    logEvent(this.analytics, AnalyticsEvents.MENU_HOME)
  }
  trackMenuAbout(): void {
    logEvent(this.analytics, AnalyticsEvents.MENU_ABOUT)
  }
  trackMenuQuotes(): void {
    logEvent(this.analytics, AnalyticsEvents.MENU_QUOTES)
  }
  trackMenuMapics(): void {
    logEvent(this.analytics, AnalyticsEvents.MENU_MAPICS)
  }
  trackMenuContact(): void {
    logEvent(this.analytics, AnalyticsEvents.MENU_CONTACT)
  }
  trackContactEmailBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_EMAIL)
  }
  trackContactLinkedinBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_LINKEDIN)
  }
  trackContactIGBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_INSTAGRAM)
  }
  trackContactFBBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_FACEBOOK)
  }
  trackContactXBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_TWITTER)
  }
  trackContactGHBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_GITHUB)
  }
  trackContactMeBtn(): void {
    logEvent(this.analytics, AnalyticsEvents.CONTACT_CONTACTME)
  }
  trackMapSelection(id: string, lat: string, lng: string): void {
    logEvent(this.analytics, AnalyticsEvents.MAPICS, {
      id,
      lat,
      lng
    })
  }
}

export default AnalyticsService
