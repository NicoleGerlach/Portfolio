import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  menuOpen = false;

  constructor(
    private router: Router
  ) { }

  closeMenu() {
    this.menuOpen = false;
  }

  onNavigate(section: string) {
    this.scrollToWithFragment(section);
  }

  scrollToWithFragment(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.router.navigate([], { fragment: sectionId });
    }
    this.closeMenu();
  }
}
