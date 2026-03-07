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

private scrollToWithFragment(sectionId: string, retries = 20, offsetDesktop = 110, offsetMobile = 20) {
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = window.innerWidth <= 900 ? offsetMobile : offsetDesktop;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return;
  }
  if (retries > 0) {
    setTimeout(() => this.scrollToWithFragment(sectionId, retries - 1, offsetDesktop, offsetMobile), 50);
  }
}

  toggleMenu() {
    const current = this.privatemenuOpenSubject.value;
    this.privatemenuOpenSubject.next(!current);
  }
}