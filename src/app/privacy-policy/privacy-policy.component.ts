import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Observable } from 'rxjs';
import { HeaderContent, PrivacyPolicyContent } from '../interfaces/all-interfaces';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy$!: Observable<PrivacyPolicyContent | null>;
  header$!: Observable<HeaderContent | null>;
  returnTo: string | null = null;

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.privacyPolicy$ = this.languageService.privacyPolicyContent$;
    this.header$ = this.languageService.headerContent$;
    this.languageService.loadTextsPrivacyPolicy();
    this.returnToPreviousLocation();
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  returnToPreviousLocation() {
    this.returnTo = this.route.snapshot.queryParamMap.get('returnTo');
  }

  goBack() {
    if (this.returnTo === 'footer') {
      this.router.navigate(['/']).then(() => {
        this.scrollToFooterWithRetries();
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  private scrollToFooterWithRetries(retries = 10) {
    const el = document.getElementById('footer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (retries > 0) {
      setTimeout(() => this.scrollToFooterWithRetries(retries - 1), 50);
    }
  }

  onNavigate(section: string) {
    this.router.navigate(['/'], { fragment: section }).then(() => {
      this.navigationService.scrollToWithFragment(section);
    });
  }

  private scrollToSection(section: string, retries = 20) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (retries > 0) {
      setTimeout(() => this.scrollToSection(section, retries -1), 50);
    }
  }

  onLang(lang: 'de' | 'en') {
    this.headerService.setLang(lang);
  }
}
