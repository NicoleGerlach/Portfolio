
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AboutMeContent {
    whyMe: string;
    skills: string;
    projects: string;
    contact: string;
    nameSmall: string;
    professionSmall: string;
    name: string;
    profession: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: 'de' | 'en' = 'de';

  private aboutContentSubject = new BehaviorSubject<AboutMeContent | null>(null);
  public aboutContent$: Observable<AboutMeContent | null> = this.aboutContentSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadTexts(): void {
    const path = this.currentLang === 'de'
      ? 'assets/i18n/about-me/de.json'
      : 'assets/i18n/about-me/en.json';
    this.http.get<AboutMeContent>(path).subscribe((data) => {
      this.aboutContentSubject.next(data);
    });
  }

    setLang(lang: 'de' | 'en'): void {
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      this.loadTexts();
    }
  }
}

