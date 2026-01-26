import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectContent } from '../interfaces/all-interfaces'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public http: HttpClient) { }

  loadProjects(path: string): Observable<ProjectContent> {
    return this.http.get<ProjectContent>(path);
  }
}