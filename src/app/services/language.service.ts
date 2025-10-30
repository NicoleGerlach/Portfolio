
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

export interface MySkillsContent {
  headline: string;
}

export interface ReferencesContent {
  headline: string;
  notions: string;
  references: ReferenceCard[],
}

export interface ReferenceCard {
  name: string;
  project: string;
  projectName: string;
  feedback: string;
}

export interface ProjectContent {
  headline: string,
  technologies: string,
  duration: string,
  about: string,
  organisation: string,
  groupWork: string,
  projects: ProjectCard[],
}

export interface ProjectCard {
  proNumber: string,
  proName: string,
  proTechnologies: string,
  proDuration: string,
  img: string,
  proDeclaration: string,
  proOrganisation: string,
  proGroupWork: string,
}

export interface ContactContent {
  headline: string;
  phone: string;
  mail: string;
  text: string;
  cooperation: string;
  have: string;
  prPolicy: string;
  read: string;
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

  private mySkillsContentSubject = new Subject<MySkillsContent>();
  public mySkillsContent$: Observable<MySkillsContent | null> = this.mySkillsContentSubject.asObservable();

  private referencesContentSubject = new Subject<ReferencesContent>();
  public referencesContent$: Observable<ReferencesContent | null> = this.referencesContentSubject.asObservable();

  private projectContentSubject = new Subject<ProjectContent>();
  public projectContent$: Observable<ProjectContent | null> = this.projectContentSubject.asObservable();

  private contactContentSubject = new Subject<ContactContent>();
  public contactContent$: Observable<ContactContent | null> = this.contactContentSubject.asObservable();

  constructor(private http: HttpClient) { }

  private pathMap = {
    aboutMe: { de: 'assets/i18n/about-me/de.json', en: 'assets/i18n/about-me/en.json' },
    whyMe: { de: 'assets/i18n/why-me/de.json', en: 'assets/i18n/why-me/en.json' },
    mySkills: { de: 'assets/i18n/skills/de.json', en: 'assets/i18n/skills/en.json' },
    references: { de: 'assets/i18n/references/de.json', en: 'assets/i18n/references/en.json' },
    project: { de: 'assets/i18n/projects/de.json', en: 'assets/i18n/projects/en.json' },
    contact: { de: 'assets/i18n/contact/de.json', en: 'assets/i18n/contact/en.json' },

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


  //   setLang(lang: 'de' | 'en'): void {
  //   if (this.currentLang !== lang) {
  //     console.log('Lang wechseln:', this.currentLang, '->', lang);
  //     this.currentLang = lang;
  //     this.loadTextsAboutMe();
  //     this.loadTextsWhyMe();
  //   }
  // }
}

