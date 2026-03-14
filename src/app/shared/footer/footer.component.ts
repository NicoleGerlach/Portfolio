import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";

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

  constructor(private router: Router) { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  focusToName(): void {
    const contactSection = document.getElementById('contactMe')
    const nameInput = document.getElementById('name');
    contactSection?.scrollTo({ behavior: 'smooth', top: 0 });
    nameInput?.focus();
  }

  goToStart() {
    if (this.router.url === '/') {
      this.scrollToTop()
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToTop();
      });
    }
  }
}