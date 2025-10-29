import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactContent } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient) { }

  loadContact(path: string): Observable<ContactContent> {
    return this.http.get<ContactContent>(path);
  }
}
