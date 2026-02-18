import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { LanguageService } from '../../services/language.service';

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
  ) { }

  onNavigate(section: string, event: MouseEvent) {
    event.preventDefault();
    this.navigate.emit(section);
  }

  onLang(lang: 'de' | 'en') {
    this.changeLang.emit(lang);
  }

  get currentLang() {
    return this.languageService.currentLang;
  }
}