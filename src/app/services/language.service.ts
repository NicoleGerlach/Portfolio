
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  aboutContent: AboutMeContent = {
    whyMe: '', skills: '', projects: '', contact: '',
    nameSmall: '', professionSmall: '', name: '', profession: '',
  };

  currentLang: 'de' | 'en' = 'de';

  constructor(private http: HttpClient) { }

    loadTexts(): void {
    const path = this.currentLang === 'de'
    ? 'assets/i18n/about-me/de.json'
    : 'assets/i18n/about-me/en.json';
    this.loadAboutMe(path).subscribe((data: any) => {
      this.aboutContent = data as AboutMeContent;
    })
  }

  loadAboutMe(path: string) {
    return this.http.get<AboutMeContent>(path);
  }

}
