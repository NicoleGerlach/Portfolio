import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit {

  constructor (public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.loadTexts();
  }

}
