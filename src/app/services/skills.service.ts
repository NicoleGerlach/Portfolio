import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MySkillsContent } from '../interfaces/allInterfaces';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(public http: HttpClient) { }

  loadMySkills(path: string): Observable<MySkillsContent> {
    return this.http.get<MySkillsContent>(path);
  }
}
