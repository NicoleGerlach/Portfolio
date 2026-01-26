import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Observable } from 'rxjs';
import { PrivacyPolicyContent } from '../interfaces/all-interfaces';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy$!: Observable<PrivacyPolicyContent | null>;
  returnTo: string | null = null;

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.privacyPolicy$ = this.languageService.privacyPolicyContent$;
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
}