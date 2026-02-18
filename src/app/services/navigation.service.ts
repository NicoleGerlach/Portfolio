import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  privatemenuOpenSubject = new BehaviorSubject<boolean>(false);
  menuOpen$: Observable<boolean> = this.privatemenuOpenSubject.asObservable();

  openMenu() {
    this.privatemenuOpenSubject.next(true);
  }

  closeMenu() {
    this.privatemenuOpenSubject.next(false);
  }

  constructor(
    private router: Router
  ) { }

  navigateToSection(sectionId: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToWithFragment(sectionId);
    } else {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        this.scrollToWithFragment(sectionId);
      });
    }
    this.closeMenu();
  }

  private scrollToWithFragment(sectionId: string, retries = 20) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (retries > 0) {
      setTimeout(() => this.scrollToWithFragment(sectionId, retries - 1), 50);
    }
  }

  toggleMenu() {
    const current = this.privatemenuOpenSubject.value;
    this.privatemenuOpenSubject.next(!current);
  }
}
