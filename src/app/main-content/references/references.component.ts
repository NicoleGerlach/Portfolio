
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService} from '../../services/language.service';
import { Observable } from 'rxjs';
import { ReferencesContent } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  references$!: Observable<ReferencesContent | null>;
  feedbackOpen = false;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.references$ = this.languageService.referencesContent$;
    this.languageService.loadTextsReferences();
  }

 toggleFeedback() {
    this.feedbackOpen = !this.feedbackOpen;
  }

  closeFeedback() {
    this.feedbackOpen = false;
  }

}
