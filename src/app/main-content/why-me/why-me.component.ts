
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { WhyMeContent } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit {
  whyMe$!: Observable<WhyMeContent | null>;
  hover =false;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.whyMe$ = this.languageService.whyMeContent$;
    this.languageService.loadTextsWhyMe();
  }

}
