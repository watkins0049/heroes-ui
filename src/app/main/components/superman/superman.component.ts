import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../../../core/services/hero.service';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Hero } from '../../../core/services/contracts/hero';

@Component({
  selector: 'app-superman',
  imports: [],
  templateUrl: './superman.component.html',
  styleUrl: './superman.component.scss'
})
export class SupermanComponent implements OnInit, OnDestroy {

  private hero$: Subscription = new Subscription();
  public hero: Observable<Hero>;

  constructor(private heroService: HeroService) {
    console.warn('SupermanComponent loaded');
  }

  ngOnInit() {
    this.hero$ = this.heroService.getHero()
      .pipe(h => this.hero = h)
      .subscribe();
  }

  ngOnDestroy() {
    this.hero$.unsubscribe();
  }
}
