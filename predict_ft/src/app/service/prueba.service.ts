import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }

  predict(object: any): Observable<any> {
    return this.http.post<any>(this.apiURL + 'predict', object);
  }

}
