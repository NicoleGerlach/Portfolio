import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { HeaderService } from '../../services/header.service';
import { MenuComponent } from '../menu/menu.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  header$!: Observable<HeaderContent | null>;
  menuOpen$ = this.navigationService.menuOpen$;

  constructor(
    private languageService: LanguageService,
    private headerService: HeaderService,
    public navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.header$ = this.languageService.headerContent$;
    this.languageService.loadTextsHeader();
  }

  onNavigate(section: string) {
    this.navigationService.navigateToSection(section);
  }

  onLang(lang: 'de' | 'en') {
    this.headerService.setLang(lang);
  }
}