
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { AboutMeContent } from '../../interfaces/all-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {
  aboutMe$!: Observable<AboutMeContent | null>;

  menuOpen = false;
  hover = false;
  fontColorBlack = true;

  constructor(
    public languageService: LanguageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aboutMe$ = this.languageService.aboutContent$;
    this.languageService.loadTextsAboutMe();
    };

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
    }
    console.log("setLang funktioniert");
    
    this.closeMenu();
  }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.languageService.currentLang === 'de',
      'lang-en': this.languageService.currentLang === 'en',
    }
  }

scrollToWithFragment(sectionId: string, event: MouseEvent) {
    event.preventDefault(); // verhindert normales Verhalten
    // Erst scrollen wir programmgesteuert, dann setzen wir das Fragment
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Fragment in der URL setzen (führt zur Aktualisierung der Adresszeile)
      this.router.navigate([], { fragment: sectionId });
    }
    this.closeMenu();
  }

}
