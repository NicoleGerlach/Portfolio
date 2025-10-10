import { NgClass } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService, Lang, ContentMap } from '../../services/language.service';
import { Subscription } from 'rxjs';
import { AboutMeService } from '../../services/about-me.service';

type AboutMeContent = {
  whyMe: string;
  skills: string;
  projects: string;
  contact: string;
  nameSmall: string;
  professionSmall: string;
  name: string;
  profession: string;
};

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  aboutContent: AboutMeContent = {
    whyMe: '', skills: '', projects: '', contact: '',
    nameSmall: '', professionSmall: '', name: '', profession: ''
  };

  menuOpen = false;
  hover = false;
  fontColorBlack = true;
  currentLang: Lang = 'de';

  private sub = new Subscription();

  constructor(private aboutMeService: AboutMeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.loadContent(this.currentLang);
    this.sub.add(this.languageService.content$.subscribe((c: ContentMap) => {

      this.aboutContent = {
        whyMe: c['whyMe'] ?? '',
        skills: c['skills'] ?? '',
        projects: c['projects'] ?? '',
        contact: c['contact'] ?? '',
        nameSmall: c['nameSmall'] ?? '',
        professionSmall: c['professionSmall'] ?? '',
        name: c['name'] ?? '',
        profession: c['profession'] ?? ''
      };
    }));
    this.sub.add(this.languageService.currentLang$.subscribe(l => this.currentLang = l));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  switchLanguages(): void {
    this.languageService.toggleLanguage();
    // this.closeMenu();
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }

  getLangClasses(): { 'lang-de': boolean; 'lang-en': boolean } {
    return {
      'lang-de': this.currentLang === 'de',
      'lang-en': this.currentLang === 'en'
    };
  }
}


