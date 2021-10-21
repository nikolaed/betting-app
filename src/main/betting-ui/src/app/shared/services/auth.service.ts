import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:5000/";
  getUrl = "http://localhost:5000/api/v1/sports/soccer/";

  constructor(private http: HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post(this.authUrl+"authenticate",data);
  }

  register(data: any):Observable<any>{
    let user = {
      'username':data.username,
      'password':data.password,
      'role':'ROLE_USER'
    };
    return this.http.post(this.authUrl+"register", user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // getMatchesByDate(date: any):Observable<any>{
  //   return this.http.get(this.getUrl+"matchesByDate/"+date);
  // }




}
