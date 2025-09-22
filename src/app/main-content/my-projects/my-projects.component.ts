import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [JoinComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
