
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { LanguageService, ProjectContent } from '../../services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent implements OnInit {
  project$!: Observable<ProjectContent | null>;

  currentProject: 'first' | 'second' | 'third' = 'first';
  currentProjectIndex: number = 0;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.project$ = this.languageService.projectContent$;
    this.languageService.loadTextsProjects();
  }

  showProject(index: number): void {
    this.currentProjectIndex = index;
    this.currentProject = index === 0 ? 'first' : index === 1 ? 'second' : 'third';    
  }
}
