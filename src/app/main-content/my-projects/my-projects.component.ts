
import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ProjectContent } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
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

  openExternal(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log('lifeTest URL:', url);
  }
}
