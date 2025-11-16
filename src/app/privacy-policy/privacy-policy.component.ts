import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Observable } from 'rxjs';
import { PrivacyPolicyContent } from '../interfaces/all-interfaces';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy$!: Observable<PrivacyPolicyContent | null>;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.privacyPolicy$ = this.languageService.privacyPolicyContent$;
    this.languageService.loadTextsPrivacyPolicy();
  }

}
