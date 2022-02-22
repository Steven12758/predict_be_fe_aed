import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService {
  
  abstract apiURL: string;

  constructor(private http: HttpClient) {
  }

  public list(): Observable<any[]> {
    return this.http.get<any>(this.apiURL);
  }

  public create(object: any): Observable<any> {
    return this.http.post<any>(this.apiURL, object);
  }
}
