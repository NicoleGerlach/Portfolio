
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { AboutMeContent } from '../../interfaces/all-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {
  aboutMe$!: Observable<AboutMeContent | null>;

  hover = false;
  fontColorBlack = true;

  constructor(
    public languageService: LanguageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aboutMe$ = this.languageService.aboutContent$;
    this.languageService.loadTextsAboutMe();
    };

}
