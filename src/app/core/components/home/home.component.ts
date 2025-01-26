import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public title = 'Super Heroes of the DC Universe';
  public heroes: String[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.allHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
