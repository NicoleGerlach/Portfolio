
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements OnInit {

  menuOpen = false;
  hover = false;
  fontColorBlack = true;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.loadTexts();
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
    this.languageService.loadTexts();
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
