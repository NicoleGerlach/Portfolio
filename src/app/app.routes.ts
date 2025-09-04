
import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { WhyMeComponent } from './main-content/why-me/why-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { MyProjectsComponent } from './main-content/my-projects/my-projects.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'whyMe', component: WhyMeComponent },
    { path: 'skills', component: MySkillsComponent },
    { path: 'projects', component: MyProjectsComponent },
    { path: 'contact', component: ContactMeComponent },
];


