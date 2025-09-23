import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { PitPenguinComponent } from './pit-penguin/pit-penguin.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [JoinComponent, PitPenguinComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
