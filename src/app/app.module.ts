import {GoogleAnalyticsService} from "./service/google/analytics/google-analytics.service";
import {LazyLoadScriptService} from "./service/lazy-load-script/lazy-load-script.service";
import {googleAnalyticsServiceFactory} from "./service/google/analytics/google-analytics-service-factory";

@NgModule({
  providers: [
    {
      provide: GoogleAnalyticsService,
      useFactory: googleAnalyticsServiceFactory,
      deps: [LazyLoadScriptService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (googleAnalyticsService: GoogleAnalyticsService) =>
        () => Promise.resolve().then(() => googleAnalyticsService.loadComponent()),
      deps: [GoogleAnalyticsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
