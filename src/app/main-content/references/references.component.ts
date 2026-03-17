import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ReferencesContent } from '../../interfaces/all-interfaces';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {

  references$!: Observable<ReferencesContent | null>;
  currentIndex: number | null = null;
  hover = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.references$ = this.languageService.referencesContent$;
    this.languageService.loadTextsReferences();
    this.references$.subscribe(() => {
      setTimeout(() => AOS.refresh(), 0);
    });
  }

  toggleFeedback(index: number) {
    this.currentIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeFeedback(): void {
    this.currentIndex = null;
    document.body.style.overflow = 'unset';
  }
}