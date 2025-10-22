
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService, WhyMeContent } from '../../services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit {
  whyMe$!: Observable<WhyMeContent | null>;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.whyMe$ = this.languageService.whyMeContent$;
    this.languageService.loadTextsWhyMe();
  }

}
