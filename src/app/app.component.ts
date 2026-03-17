import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LanguageService } from './services/language.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    MainContentComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ImprintComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Nicole Gerlach';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Optional: Language-Logik hier
    const savedLang = localStorage.getItem('lang') as 'de' | 'en' | null;
    const initialLang: 'de' | 'en' = savedLang ?? 'de';
    if (this.languageService.currentLang !== initialLang) {
      this.setLang(initialLang);
    }
  }

  ngAfterViewInit(): void {
    AOS.init({ once: false, duration: 600, offset: 120 });
  }

  private setLang(lang: 'de' | 'en') {
    this.languageService.currentLang = lang;
    localStorage.setItem('lang', lang);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { FooterComponent } from './shared/footer/footer.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { MainContentComponent } from './main-content/main-content.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { ImprintComponent } from './imprint/imprint.component';
// import { LanguageService } from './services/language.service';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule,
//     HttpClientModule,
//     RouterLink,
//     RouterOutlet,
//     MainContentComponent,
//     HeaderComponent,
//     FooterComponent,
//     PrivacyPolicyComponent,
//     ImprintComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit {
//   title = 'Nicole Gerlach';

//   constructor(private languageService: LanguageService) { }

//   ngOnInit() {
//     AOS.init({ once: false, duration: 600, offset: 120 });
//     const savedLang = localStorage.getItem('lang') as 'de' | 'en' | null;
//     const initialLang: 'de' | 'en' = savedLang ?? 'de';
//     if (this.languageService.currentLang !== initialLang) {
//       this.setLang(initialLang);
//     }
//   }

//   private setLang(lang: 'de' | 'en') {
//     this.languageService.currentLang = lang;
//     localStorage.setItem('lang', lang);
//   }
// }