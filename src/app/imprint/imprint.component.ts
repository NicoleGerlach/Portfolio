import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { Observable } from 'rxjs';
import { HeaderContent } from '../interfaces/all-interfaces';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
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
    this.header$ = this.languageService.headerContent$;
    // this.languageService.loadTextsLegalNotice();
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
    this.navigationService.navigateToSection(section);
  }

  onLang(lang: 'de' | 'en') {
    this.headerService.setLang(lang);
  }
}