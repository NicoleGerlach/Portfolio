
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HeaderContent, AboutMeContent, WhyMeContent, MySkillsContent, ReferencesContent, ProjectContent, ContactContent, PrivacyPolicyContent } from '../interfaces/all-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: 'de' | 'en' = 'de';

  private headerContentSubject = new BehaviorSubject<HeaderContent | null>(null);
  public headerContent$: Observable<HeaderContent | null> = this.headerContentSubject.asObservable();

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

  private privacyPolicySubject = new BehaviorSubject<PrivacyPolicyContent | null>(null);
  public privacyPolicyContent$: Observable<PrivacyPolicyContent | null> = this.privacyPolicySubject.asObservable();

  constructor(private http: HttpClient) { }

  private pathMap = {
    header: { de: 'assets/i18n/header/de.json', en: 'assets/i18n/header/en.json' },
    aboutMe: { de: 'assets/i18n/about-me/de.json', en: 'assets/i18n/about-me/en.json' },
    whyMe: { de: 'assets/i18n/why-me/de.json', en: 'assets/i18n/why-me/en.json' },
    mySkills: { de: 'assets/i18n/skills/de.json', en: 'assets/i18n/skills/en.json' },
    references: { de: 'assets/i18n/references/de.json', en: 'assets/i18n/references/en.json' },
    project: { de: 'assets/i18n/projects/de.json', en: 'assets/i18n/projects/en.json' },
    contact: { de: 'assets/i18n/contact/de.json', en: 'assets/i18n/contact/en.json' },
    privacyPolicy: { de: 'assets/i18n/privacy-policy/de.json', en: 'assets/i18n/privacy-policy/en.json' },
  } as const;

  loadTextsHeader(): void {
    const lang = this.currentLang;
    const path = this.pathMap.header[lang] ?? this.pathMap.header.de;
    this.http.get<HeaderContent>(path).subscribe(data => this.headerContentSubject.next(data));
  }

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

  loadTextsPrivacyPolicy(): void {
    const lang = this.currentLang;
    const path = this.pathMap.privacyPolicy[lang] ?? this.pathMap.privacyPolicy.de;
    this.http.get<PrivacyPolicyContent>(path).subscribe(data => this.privacyPolicySubject.next(data));
    console.log("loadTextsPrivacyPolicy funktioniert");

  }

}

