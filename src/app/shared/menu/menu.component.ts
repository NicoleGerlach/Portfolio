import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() isHamburger: boolean = false;
  @Input() menuContent: HeaderContent | null = null;
  @Input() menuClass: boolean = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() changeLang = new EventEmitter<'de' | 'en'>();

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private navigationService: NavigationService
  ) { }

  // onNavigate(section: string, event: MouseEvent) {
  //   event.preventDefault();
  //   this.navigate.emit(section);
  // }

  onNavigate(section: string, event: MouseEvent) {
    this.router.navigate(['/'], { fragment: section }).then(() => {
      // event.preventDefault();
      // this.navigate.emit(section);
      this.navigationService.scrollToWithFragment(section);
    });
    this.navigationService.closeMenu();
  }

  onLang(lang: 'de' | 'en') {
    this.changeLang.emit(lang);
  }

  get currentLang() {
    return this.languageService.currentLang;
  }
}