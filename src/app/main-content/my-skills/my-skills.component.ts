import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { MySkillsContent } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  mySkills$!: Observable<MySkillsContent | null>;
  hover = false;

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.mySkills$ = this.languageService.mySkillsContent$;
    this.languageService.loadTextsSkills();
  }

}
