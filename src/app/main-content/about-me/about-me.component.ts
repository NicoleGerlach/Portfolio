
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService, AboutMeContent } from '../../services/language.service';
import { Observable } from 'rxjs';

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

  constructor(public languageService: LanguageService) { }

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
    this.languageService.loadTextsAboutMe();
    this.languageService.loadTextsWhyMe();
    this.languageService.loadTextsSkills();
    this.languageService.loadTextsReferences();
    }
    // this.closeMenu();
  }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.languageService.currentLang === 'de',
      'lang-en': this.languageService.currentLang === 'en',
    }
  }
}
