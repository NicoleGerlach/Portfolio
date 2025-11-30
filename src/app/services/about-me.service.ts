
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AboutMeContent } from "../interfaces/all-interfaces"; 

@Injectable({
    providedIn: 'root'
})
export class AboutMeService {

    constructor(public http: HttpClient) { }

    loadAboutMe(path: string): Observable<AboutMeContent> {
        return this.http.get<AboutMeContent>(path);
    }
}
