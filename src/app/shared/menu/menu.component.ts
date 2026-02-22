import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { LanguageService } from '../../services/language.service';

import { NavigationService } from '../../services/navigation.service';
import { Subject, takeUntil } from 'rxjs';

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
  activeSection: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private nav: NavigationService
  ) { }

  ngOnInit(): void {
    // IDs der Sektionen, die überwacht werden sollen
    const sections = ['whyMe', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        // Alle sichtbaren Einträge filtern
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          this.activeSection = visible.target.id;
        }
      },
      {
        root: null,
        rootMargin: '-50px 0px -50px 0px',
        threshold: [0.5]
      }
    );
    // Observer auf relevante Sektionen anwenden
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    // Cleanup beim Destroy
    this.destroy$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      observer.disconnect();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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