
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderContent } from '../../interfaces/all-interfaces'; 
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  header$!: Observable<HeaderContent | null>;

  constructor(
    public languageService: LanguageService,
    public headerService: HeaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.header$ = this.languageService.headerContent$;
    this.languageService.loadTextsHeader();
  }

}
