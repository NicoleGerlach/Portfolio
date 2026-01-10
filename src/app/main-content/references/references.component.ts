
import { CommonModule, } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ReferencesContent } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {

  references$!: Observable<ReferencesContent | null>;
  // feedbackOpen = false;
  currentIndex: number | null = null;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.references$ = this.languageService.referencesContent$;
    this.languageService.loadTextsReferences();
  }

  toggleFeedback(index: number) {
    // ref.open = !ref.open;
    this.currentIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeFeedback() {
    // ref.open = false;
    this.currentIndex = null;
    document.body.style.overflow = 'unset';
  }

}
