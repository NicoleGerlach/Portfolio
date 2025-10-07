
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AboutMeService } from '../../services/about-me.service';
import { AboutMeContent, Menu } from '../../interfaces/about-me.interface';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements OnInit {

  menuOpen = false;
  hover = false;
  fontColorBlack = true;
  currentLang: 'de' | 'en' = 'de';

  aboutContent?: AboutMeContent;
  menu?: Menu;

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    // Beispiel: Inhalte laden (Passe Pfad/URL ggf. an)
    // this.aboutMeService.loadAboutMe('assets/i18n/de/about-me.json').subscribe(data => {
    //   this.aboutContent = data as AboutMeContent;
    // });
  }

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


