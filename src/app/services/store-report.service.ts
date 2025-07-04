import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreReportService {

  private apiUrl = '/api/store-report/spy';

  constructor(private http: HttpClient) { }

  storeSpyReport(report: any): Observable<any> {
    return this.http.post(this.apiUrl, report, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
