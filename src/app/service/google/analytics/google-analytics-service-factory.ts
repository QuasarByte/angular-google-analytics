import {GoogleAnalyticsService} from "./google-analytics.service";
import {isDevMode} from "@angular/core";
import {LazyLoadScriptService} from "../../lazy-load-script/lazy-load-script.service";
import {DefaultGoogleAnalyticsService} from "./default-google-analytics.service";
import {DummyGoogleAnalyticsService} from "./dummy-google-analytics.service";

export function googleAnalyticsServiceFactory(lazyLoadService: LazyLoadScriptService): GoogleAnalyticsService {
  let googleAnalyticsService: GoogleAnalyticsService;

  // if (!isDevMode()) {
     googleAnalyticsService = new DefaultGoogleAnalyticsService(lazyLoadService);
  // } else {
  //   googleAnalyticsService = new DummyGoogleAnalyticsService();
  // }

  return googleAnalyticsService;
}
