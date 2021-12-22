import {GoogleAnalyticsService} from "./google-analytics.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DummyGoogleAnalyticsService extends GoogleAnalyticsService {

  constructor() {
    super();
  }

  loadComponent(): void {
    console.log('Dummy Google Analytics has been loaded')
  }

  public eventEmitter(eventName: string, eventCategory: string, eventAction: string, eventLabel: string, eventValue: number) {
    console.log(
      `Dummy Google Analytics event emitted: ` +
      `eventName: '${eventName}', ` +
      `eventCategory: '${eventCategory}', ` +
      `eventAction: '${eventAction}', ` +
      `eventLabel: '${eventLabel}', ` +
      `eventValue: '${eventValue}'`
    );
  }

  public sendPagePath(path: string) {
    console.log(`Dummy Google Analytics sent path: ${path}`)
  }

}
