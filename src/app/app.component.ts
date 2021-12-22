import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {GoogleAnalyticsService} from "./service/google/analytics/google-analytics.service";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService,
  ) {

    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          googleAnalyticsService.sendPagePath(event.urlAfterRedirects);
        }
      }
    )

  }

}
