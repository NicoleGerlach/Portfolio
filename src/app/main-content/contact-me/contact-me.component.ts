
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ContactContent } from '../../interfaces/all-interfaces';
import { RouterLink } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent implements OnInit {
  contact$!: Observable<ContactContent | null>;
  hover = false;
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  checkboxImg = 'assets/img/Checkbox.svg';
  isChecked = false;
  submitImg = 'assets/img/Btn_Send_Error.svg';

  mailTest = true;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.contact$ = this.languageService.contactContent$;
    this.languageService.loadTextsContact();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.checkboxImg = this.checkboxImg === 'assets/img/Checkbox.svg' ? 'assets/img/Checkbox_done.svg' : 'assets/img/Checkbox.svg'  
  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.isChecked) {
          console.log("Funktioniert", this.contactData);
    }
  }

}
