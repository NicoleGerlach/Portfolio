import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService, LegalNoticeContent } from '../services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent implements OnInit {
  legalNotice$!: Observable<LegalNoticeContent | null>;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.legalNotice$ = this.languageService.legalNoticeContent$;
    this.languageService.loadTextsLegalNotice();
  }

}
