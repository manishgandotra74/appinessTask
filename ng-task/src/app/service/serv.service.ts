import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServService {
  constructor(private router: Router, private http: Http) { 
   
  }
  getUsers(val) {
    return this.http.get("https://api.github.com/search/users?q="+val).pipe(map((response: any) => response.json()))
  }
  getRepos(name) {
    return this.http.get("https://api.github.com/users/"+name+"/repos").pipe(map((response: any) => response.json()))
  }
}
