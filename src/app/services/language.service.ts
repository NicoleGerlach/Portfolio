
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { AboutMeContent, WhyMeContent } from '../interfaces/allInterfaces';

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

export interface WhyMeContent {
  whyMe: string;
  me: string;
  located: string;
  dots: string;
  motivation: string;
  skills: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: 'de' | 'en' = 'de';

  private aboutContentSubject = new Subject<AboutMeContent>();
  public aboutContent$: Observable<AboutMeContent | null> = this.aboutContentSubject.asObservable();

  private whyMeContentSubject = new Subject<WhyMeContent>();
  public whyMeContent$: Observable<WhyMeContent | null> = this.whyMeContentSubject.asObservable();


  constructor(private http: HttpClient) { }

  private loadText<T>(path: string, subject: Subject<T>): void {
    this.http.get<T>(path).subscribe((data) => subject.next(data));
  }

  loadTextsAboutMe(): void {
    const path = this.currentLang === 'de'
      ? 'assets/i18n/about-me/de.json'
      : 'assets/i18n/about-me/en.json';
    this.http.get<AboutMeContent>(path).subscribe(data => this.aboutContentSubject.next(data));
  }

  loadTextsWhyMe(): void {
    const path = this.currentLang === 'de'
      ? 'assets/i18n/why-me/de.json'
      : 'assets/i18n/why-me/en.json';
    this.http.get<WhyMeContent>(path).subscribe(data => this.whyMeContentSubject.next(data));
  }

  // loadTextsAboutMe(): void {
  //   const path = this.currentLang === 'de'
  //     ? 'assets/i18n/about-me/de.json'
  //     : 'assets/i18n/about-me/en.json';
  //   this.http.get<AboutMeContent>(path).subscribe((data) => {
  //     this.aboutContentSubject.next(data);
  //   });
  // }

  // loadTextsWhyMe(): void {
  //   const path = this.currentLang === 'de'
  //     ? 'assets/i18n/why-me/de.json'
  //     : 'assets/i18n/why-me/en.json';
  //   this.http.get<WhyMeContent>(path).subscribe((data) => {
  //     this.whyMeContentSubject.next(data);
  //   });
  // }

  //   setLang(lang: 'de' | 'en'): void {
  //   if (this.currentLang !== lang) {
  //     console.log('Lang wechseln:', this.currentLang, '->', lang);
  //     this.currentLang = lang;
  //     this.loadTextsAboutMe();
  //     this.loadTextsWhyMe();
  //   }
  // }
}

