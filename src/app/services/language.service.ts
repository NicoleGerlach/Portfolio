
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AboutMeContent, WhyMeContent, MySkillsContent, ReferencesContent, ProjectContent, ContactContent, LegalNoticeContent } from '../interfaces/all-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: 'de' | 'en' = 'de';

  private aboutContentSubject = new BehaviorSubject<AboutMeContent | null>(null);
  public aboutContent$: Observable<AboutMeContent | null> = this.aboutContentSubject.asObservable();

  private whyMeContentSubject = new BehaviorSubject<WhyMeContent | null>(null);
  public whyMeContent$: Observable<WhyMeContent | null> = this.whyMeContentSubject.asObservable();

  private mySkillsContentSubject = new BehaviorSubject<MySkillsContent | null>(null);
  public mySkillsContent$: Observable<MySkillsContent | null> = this.mySkillsContentSubject.asObservable();

  private referencesContentSubject = new BehaviorSubject<ReferencesContent | null>(null);
  public referencesContent$: Observable<ReferencesContent | null> = this.referencesContentSubject.asObservable();

  private projectContentSubject = new BehaviorSubject<ProjectContent | null>(null);
  public projectContent$: Observable<ProjectContent | null> = this.projectContentSubject.asObservable();

  private contactContentSubject = new BehaviorSubject<ContactContent | null>(null);
  public contactContent$: Observable<ContactContent | null> = this.contactContentSubject.asObservable();

  private legalNoticeContentSubject = new BehaviorSubject<LegalNoticeContent | null>(null);
  public legalNoticeContent$: Observable<LegalNoticeContent | null> = this.legalNoticeContentSubject.asObservable();

  constructor(private http: HttpClient) { }

  private pathMap = {
    aboutMe: { de: 'assets/i18n/about-me/de.json', en: 'assets/i18n/about-me/en.json' },
    whyMe: { de: 'assets/i18n/why-me/de.json', en: 'assets/i18n/why-me/en.json' },
    mySkills: { de: 'assets/i18n/skills/de.json', en: 'assets/i18n/skills/en.json' },
    references: { de: 'assets/i18n/references/de.json', en: 'assets/i18n/references/en.json' },
    project: { de: 'assets/i18n/projects/de.json', en: 'assets/i18n/projects/en.json' },
    contact: { de: 'assets/i18n/contact/de.json', en: 'assets/i18n/contact/en.json' },
    legalNotice: { de: 'assets/i18n/legal-notice/de.json', en: 'assets/i18n/legal-notice/en.json' },
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

  loadTextsSkills(): void {
    const lang = this.currentLang;
    const path = this.pathMap.mySkills[lang] ?? this.pathMap.mySkills.de;
    this.http.get<MySkillsContent>(path).subscribe(data => this.mySkillsContentSubject.next(data));
  }

  loadTextsReferences(): void {
    const lang = this.currentLang;
    const path = this.pathMap.references[lang] ?? this.pathMap.references.de;
    this.http.get<ReferencesContent>(path).subscribe(data => this.referencesContentSubject.next(data));
  }

  loadTextsProjects(): void {
    const lang = this.currentLang;
    const path = this.pathMap.project[lang] ?? this.pathMap.project.de;
    this.http.get<ProjectContent>(path).subscribe(data => this.projectContentSubject.next(data));
  }

  loadTextsContact(): void {
    const lang = this.currentLang;
    const path = this.pathMap.contact[lang] ?? this.pathMap.contact.de;
    this.http.get<ContactContent>(path).subscribe(data => this.contactContentSubject.next(data));
  }

  loadPlaceholders(): void {
    const lang = this.currentLang;
    const path = this.pathMap.contact[lang] ?? this.pathMap.contact.de;
    this.http.get<ContactContent>(path).subscribe(data => this.contactContentSubject.next(data));
  }

  loadTextsLegalNotice(): void {
    const lang = this.currentLang;
    const path = this.pathMap.legalNotice[lang] ?? this.pathMap.legalNotice.de;
    this.http.get<LegalNoticeContent>(path).subscribe(data => this.legalNoticeContentSubject.next(data));
    console.log("loadTextsLegalNotice funktioniert");
    
  }

}

