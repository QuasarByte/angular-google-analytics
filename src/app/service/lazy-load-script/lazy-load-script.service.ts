import {Inject, Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LazyLoadScriptService {

  loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  public loadScript(url: string): Observable<void> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    script.onerror = () => {
      console.log(`Cannot load script: '${url}'`)
    }

    this.document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }

}
