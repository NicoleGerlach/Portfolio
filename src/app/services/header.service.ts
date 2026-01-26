import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderContent } from '../interfaces/all-interfaces';
import { LanguageService } from './language.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  menuOpen = false;

  constructor(
    public http: HttpClient,
    public languageService: LanguageService,
    private router: Router
  ) {}

  loadHeader(path: string): Observable<HeaderContent> {
    return this.http.get<HeaderContent>(path);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLang(lang: 'de' | 'en') {
    if (this.languageService.currentLang !== lang) {
      this.languageService.currentLang = lang;

      localStorage.setItem('lang', lang);

      this.languageService.loadTextsAboutMe();
      this.languageService.loadTextsWhyMe();
      this.languageService.loadTextsSkills();
      this.languageService.loadTextsProjects();
      this.languageService.loadTextsReferences();
      this.languageService.loadTextsContact();
      this.languageService.loadTextsPrivacyPolicy();
      this.languageService.loadTextsHeader();
    }
    console.log('setLang funktioniert');

    this.closeMenu();
  }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.languageService.currentLang === 'de',
      'lang-en': this.languageService.currentLang === 'en',
    };
  }

  scrollToWithFragment(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.router.navigate([], { fragment: sectionId });
    }
    this.closeMenu();
  }
}