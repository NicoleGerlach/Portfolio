
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderContent } from '../../interfaces/all-interfaces';
import { LanguageService } from '../../services/language.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  header$!: Observable<HeaderContent | null>;

  constructor(
    public languageService: LanguageService,
    public headerService: HeaderService
  ) { }

ngOnInit(): void {
  this.header$ = this.languageService.headerContent$;
}

}
