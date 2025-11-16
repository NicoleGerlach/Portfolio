import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivacyPolicyContent } from '../interfaces/all-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {

  constructor(public http: HttpClient) { }

  loadPrivacyPolicy(path: string): Observable<PrivacyPolicyContent> {
    return this.http.get<PrivacyPolicyContent>(path);
  }
}
