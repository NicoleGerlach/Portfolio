
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,
    AboutMeComponent,
    MenuComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ReferencesComponent,
    ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
