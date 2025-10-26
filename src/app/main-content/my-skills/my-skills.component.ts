import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService, MySkillsContent } from '../../services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  mySkills$!: Observable<MySkillsContent | null>;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.mySkills$ = this.languageService.mySkillsContent$;
    this.languageService.loadTextsSkills();
  }

}
