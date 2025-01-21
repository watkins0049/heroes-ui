import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private heroService: HeroService) {
    heroService.allHeroes().subscribe(console.log);
  }

  public title = 'Super Heroes of the DC Universe';
}
