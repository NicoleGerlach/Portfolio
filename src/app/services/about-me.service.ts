
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface AboutMeContent {
    whyMe: string;
    skills: string;
    projects: string;
    contact: string;
    nameSmall: string;
    professionSmall: string;
    name: string;
    profession: string;
}

@Injectable({ providedIn: 'root' })

export class AboutMeService {

    constructor(public http: HttpClient) { }

    loadAboutMe(path: string): Observable<AboutMeContent> {
        return this.http.get<AboutMeContent>(path);
    }
}
