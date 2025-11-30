import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderContent } from '../interfaces/all-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(public http: HttpClient) { }

  loadHeader(path: string): Observable<HeaderContent> {
    return this.http.get<HeaderContent>(path);
  }
}
