import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { HeaderService } from '../../services/header.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  header$!: Observable<HeaderContent | null>;

  constructor(
    private languageService: LanguageService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.header$ = this.languageService.headerContent$;
    this.languageService.loadTextsHeader();
  }

  toggleMenu(): void {
    this.headerService.toggleMenu();
  }

  getMenuClass(): boolean {
    return this.headerService.menuOpen; 
  }

  onNavigate(section: string) {
    this.headerService.scrollToWithFragment(section);
  }

  onLang(lang: 'de' | 'en') {
    this.headerService.setLang(lang);
  }
}