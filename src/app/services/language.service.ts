import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

export type Lang = 'de' | 'en';
export type ContentMap = { [section: string]: any };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _currentLang$ = new BehaviorSubject<Lang>('de');
  currentLang$: Observable<Lang> = this._currentLang$.asObservable();

  private _content$ = new BehaviorSubject<ContentMap>({});
  content$: Observable<ContentMap> = this._content$.asObservable();

  constructor(private http: HttpClient) {}

  get currentLang(): Lang {
    return this._currentLang$.value;
  }

  loadContent(lang: Lang): void {
    const path = lang === 'de'
      ? 'assets/i18n/about-me/de.json'
      : 'assets/i18n/about-me/en.json';
    this.http.get<ContentMap>(path).subscribe(data => {
      this._content$.next(data);
      this._currentLang$.next(lang);
    });
  }

  toggleLanguage(): void {
    const next: Lang = this.currentLang === 'de' ? 'en' : 'de';
    this.loadContent(next);
  }
}