
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferencesContent } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(public http: HttpClient) { }

  loadReferences(path: string): Observable<ReferencesContent> {
    return this.http.get<ReferencesContent>(path);
  }
}
