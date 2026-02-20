
import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';
import { ContactContent } from '../../interfaces/all-interfaces';
import { RouterLink } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent implements OnInit {
  http = inject(HttpClient);
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
    endPoint: 'https://gerlach-nicole.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(this.contactData);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
      this.toggleCheckbox();
    }
  }

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && this.isChecked) {
  //         console.log("Funktioniert", this.contactData);

  //   }
  //   ngForm.resetForm();
  //   this.toggleCheckbox();
  // }

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.form.valid && this.isChecked) {
  //     console.log("Funktioniert", this.contactData);
  //     // hier echte Verarbeitung/POST einfügen
  //   } else {
  //     // Optional: Fehlermeldung oder UI-Feedback
  //     console.warn("Formular unvollständig oder Checkbox nicht aktiviert.");
  //   }
  // }

}
