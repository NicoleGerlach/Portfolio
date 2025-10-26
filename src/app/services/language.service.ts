
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

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

export interface ReferenceCard {
  name: string;
  project: string;
  projectName: string;
  feedback: string;
}

export interface ReferencesContent {
  headline: string;
  notions: string;
  references: ReferenceCard[];
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

  private referencesContentSubject = new Subject<ReferencesContent>();
  public referencesContent$: Observable<ReferencesContent | null> = this.referencesContentSubject.asObservable();


  constructor(private http: HttpClient) { }

  private pathMap = {
    aboutMe: { de: 'assets/i18n/about-me/de.json', en: 'assets/i18n/about-me/en.json' },
    whyMe: { de: 'assets/i18n/why-me/de.json', en: 'assets/i18n/why-me/en.json' },
    references: { de: 'assets/i18n/references/de.json', en: 'assets/i18n/references/en.json' },

  } as const;

  loadTextsAboutMe(): void {
    const lang = this.currentLang;
    const path = this.pathMap.aboutMe[lang] ?? this.pathMap.aboutMe.de;
    this.http.get<AboutMeContent>(path).subscribe(data => this.aboutContentSubject.next(data));
  }

  loadTextsWhyMe(): void {
    const lang = this.currentLang;
    const path = this.pathMap.whyMe[lang] ?? this.pathMap.whyMe.de;
    this.http.get<WhyMeContent>(path).subscribe(data => this.whyMeContentSubject.next(data));
  }

  loadTextsReferences(): void {
    const lang = this.currentLang;
    const path = this.pathMap.references[lang] ?? this.pathMap.references.de;
    this.http.get<ReferencesContent>(path).subscribe(data => this.referencesContentSubject.next(data));
  }


  //   setLang(lang: 'de' | 'en'): void {
  //   if (this.currentLang !== lang) {
  //     console.log('Lang wechseln:', this.currentLang, '->', lang);
  //     this.currentLang = lang;
  //     this.loadTextsAboutMe();
  //     this.loadTextsWhyMe();
  //   }
  // }
}

