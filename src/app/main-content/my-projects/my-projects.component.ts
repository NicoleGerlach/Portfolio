
import { Component} from '@angular/core';
import { JoinComponent } from './join/join.component';
import { PitPenguinComponent } from './pit-penguin/pit-penguin.component';
import { DABubbleComponent } from './dabubble/dabubble.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, DABubbleComponent, JoinComponent, PitPenguinComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  currentProject: 'first' | 'second' | 'third' = 'first';

  showProject(project: 'first' | 'second' | 'third') {
    this.currentProject = project;
  }
}
