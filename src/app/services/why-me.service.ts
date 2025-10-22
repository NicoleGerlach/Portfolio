
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WhyMeContent } from '../interfaces/allInterfaces';

// export interface WhyMeContent {
//   whyMe: string;
//   me: string;
//   located: string;
//   dots: string;
//   motivation: string;
//   skills: string;
// }

@Injectable({
  providedIn: 'root'
})
export class WhyMeService {

  constructor(public http: HttpClient) { }

  loadWhyMe(path: string): Observable<WhyMeContent> {
          return this.http.get<WhyMeContent>(path);
      }
}
