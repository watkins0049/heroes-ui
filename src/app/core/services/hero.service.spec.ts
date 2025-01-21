import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, provideHttpClientTesting(), provideHttpClient()]
    });
    service = TestBed.inject(HeroService);
  });

  describe('allHeroes', () => {
    describe('WHEN all heroes are requested THEN it', () => {

      let results$: Observable<String[]>;

      beforeEach(() => {
        spyOn(service, 'allHeroes').and.returnValue(of(['superman', 'batman']));
        results$ = service.allHeroes();
      });

      it('should be called', () => {
        expect(service.allHeroes).toHaveBeenCalled();
      });

      it('should return an Observable of heroes', () => {
        results$.subscribe((heroes) => {
          expect(heroes).toEqual(['superman', 'batman']);
        });
      });
    });
  });
});
