import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { GLOBALS } from '../../helper/global';
import { KeywordResult } from '../../models/KeywordResult';
 
@Injectable()
export class SearchService {
  constructor(private http: HttpClient,
    private globals: GLOBALS) { }

    // get jisho API result based on entered term
    getJishoTerm (term): Observable<KeywordResult> {
        let headers = new HttpHeaders();

        headers.append('','')

        let url = this.globals.getWordSearchURL(term);
        return this.http.get<KeywordResult>(url,{headers: headers});
    }
}