import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hoverEmail = false;
  hoverGithub = false;
  hoverLinkedin = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openExternal(url: string): void {
    console.log('openExternal', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}