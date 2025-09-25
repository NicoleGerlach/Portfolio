
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent {

  menuOpen = false;
  hover = false;
  fontColorBlack = true;
  currentLang: 'de' | 'en' = 'de';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLang(lang: 'de' | 'en') {
    this.currentLang = lang;
  }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.currentLang === 'de',
      'lang-en': this.currentLang === 'en',
    }
  }
}


