import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LegalNoticeContent } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class LegalNoticeService {

  constructor(public http: HttpClient) { }

    loadLegalNotice(path: string): Observable<LegalNoticeContent> {
      return this.http.get<LegalNoticeContent>(path);
    }
}
