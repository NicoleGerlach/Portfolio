
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ContactContent } from '../../interfaces/all-interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent implements OnInit {
  contact$!: Observable<ContactContent | null>;
  hover = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.contact$ = this.languageService.contactContent$;
    this.languageService.loadTextsContact();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
