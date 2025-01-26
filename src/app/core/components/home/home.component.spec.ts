import { ComponentFixture, TestBed } from '@angular/core/testing';
import { randSuperhero } from '@ngneat/falso';

import { HomeComponent } from './home.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let heroService: HeroService;

  let heroes: String[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClientTesting(), provideHttpClient(), provideRouter([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    heroService = TestBed.inject(HeroService);

    heroes = randSuperhero({ length: 10 }).map(hero => hero.alterEgo);
    spyOn(heroService, 'allHeroes').and.returnValue(of(heroes));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`
    WHEN the page loads
    THEN it`, () => {

    it('should retrieve all heroes from the Heroes Service', () => {
      expect(heroService.allHeroes).toHaveBeenCalled();
    });

    it('should display the title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('Super Heroes of the DC Universe');
    });

    it('should create a link for each superhero to view their bio', () => {
      expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(heroes.length);
    });
  });
});
