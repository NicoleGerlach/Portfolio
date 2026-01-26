import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { Observable } from 'rxjs';
import { HeaderContent } from '../interfaces/all-interfaces';
import { HeaderService } from '../services/header.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ReferencesComponent,
    ContactMeComponent,
    MenuComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  header$!: Observable<HeaderContent | null>;

  constructor(
    private headerService: HeaderService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.header$ = this.languageService.headerContent$;
  }

  onNavigate(section: string) {
    this.headerService.scrollToWithFragment(section);
  }

  onLang(lang: 'de' | 'en') {
    this.headerService.setLang(lang);
  }
}