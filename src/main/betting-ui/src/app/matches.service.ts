import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  getUrl = "http://localhost:5000/api/v1/sports/soccer/";

  constructor(private http: HttpClient) { }

  getMatchesByDate(date: any):Observable<any>{
    return this.http.get(this.getUrl+"matchesByDate/"+date);
  }

  getAllMatches():Observable<any>{
    return this.http.get(this.getUrl+"matches");
  }

  deleteMatch(id: number):Observable<any>{
    return this.http.delete(this.getUrl+"matches/"+id);
  }

  createMatch(match: Object): Observable<Object> {
    return this.http.post(this.getUrl+"matches", match);
  }

  getMatchById(id: number):Observable<any>{
    return this.http.get(this.getUrl+"match/"+id);
  }

  updateMatch(match: Object): Observable<Object> {
    return this.http.put(this.getUrl+"matches", match);
  }


}
