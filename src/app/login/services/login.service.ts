import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login({email, password}: Credentials): Observable<any> {
    const data = {
      type: 'login',
      attributes: {email, password}
    }
    return this.http.post('https://hub.cobiro.com/v1/login', {data});
  }
}
