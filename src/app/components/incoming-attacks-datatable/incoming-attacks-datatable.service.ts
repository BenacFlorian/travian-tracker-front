import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomingAttacksDatatableService {

  private apiUrl = '/api/defense-dashboard';

  constructor(private http: HttpClient) { }

  getDataForIncomingAttacksDatatable(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: {
        'accept': 'application/json'
      }
    });
  }
}
