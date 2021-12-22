export abstract class GoogleAnalyticsService {

  public abstract loadComponent(): void;

  public abstract eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
    eventValue: number
  )

  public abstract sendPagePath(path: string)

}
