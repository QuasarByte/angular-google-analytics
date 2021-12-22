import {GoogleAnalyticsService} from "./google-analytics.service";
import {LazyLoadScriptService} from "../../lazy-load-script/lazy-load-script.service";
import {Injectable} from "@angular/core";
import {gtag} from "./gtag.js";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events?source=post_page---------------------------
 */
@Injectable()
export class DefaultGoogleAnalyticsService extends GoogleAnalyticsService {

  private readonly GOOGLE_ID = 'G-XXXXXXXXXX';
  private readonly URL = `https://www.googletagmanager.com/gtag/js?id=${this.GOOGLE_ID}`

  constructor(
    private lazyLoadService: LazyLoadScriptService
  ) {
    super();
  }

  public loadComponent(): void {
    this.lazyLoadService.loadScript(this.URL)
      .subscribe(
        _ => {
          console.log("Google Analytics has been loaded.")
          gtag('js', new Date());
          gtag('config', this.GOOGLE_ID);
        }
      );
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
    eventValue: number
  ) {

    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });

    console.log(
      `Google Analytics event emitted: ` +
      `eventName: '${eventName}', ` +
      `eventCategory: '${eventCategory}', ` +
      `eventAction: '${eventAction}', ` +
      `eventLabel: '${eventLabel}', ` +
      `eventValue: '${eventValue}'`
    );

  }

  public sendPagePath(path: string) {
    gtag(
      'config',
      this.GOOGLE_ID,
      {
        'page_path': path
      }
    )
    console.log(`Google Analytics sent path: ${path}`)
  }

}
