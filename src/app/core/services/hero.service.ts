import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './contracts/hero';

@Injectable({
  providedIn: 'root',

})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/heroes');
  }

  allHeroes(): Observable<String[]> {
    return this.http.get<String[]>('/api/heroes');
  }

}
