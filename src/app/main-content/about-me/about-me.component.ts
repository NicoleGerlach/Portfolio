
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AboutMeService } from '../../services/about-me.service';

type AboutMeContent = {
  whyMe: string;
  skills: string;
  projects: string;
  contact: string;
  nameSmall: string;
  professionSmall: string;
  name: string;
  profession: string
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements OnInit {

  aboutContent: AboutMeContent = {
    whyMe: '', skills: '', projects: '', contact: '',
    nameSmall: '', professionSmall: '', name: '', profession: '',
  };

  menuOpen = false;
  hover = false;
  fontColorBlack = true;
  currentLang: 'de' | 'en' = 'de';

  constructor(public aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.loadTexts();
    };

  loadTexts(): void {
    const path = this.currentLang === 'de'
    ? 'assets/i18n/about-me/de.json'
    : 'assets/i18n/about-me/en.json';
    this.aboutMeService.loadAboutMe(path).subscribe(data => {
      this.aboutContent = data as AboutMeContent;
    })
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLang(lang: 'de' | 'en') {
    if (this.currentLang !== lang) {
    this.currentLang = lang;
    this.loadTexts();
    }
    this.closeMenu();
  }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.currentLang === 'de',
      'lang-en': this.currentLang === 'en',
    }
  }
}


