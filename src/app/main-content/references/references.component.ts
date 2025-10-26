
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService, ReferencesContent } from '../../services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  references$!: Observable<ReferencesContent | null>;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.references$ = this.languageService.referencesContent$;
    this.languageService.loadTextsReferences();
  }

}
