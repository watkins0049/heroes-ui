import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanComponent } from './superman.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SupermanComponent', () => {
  let component: SupermanComponent;
  let fixture: ComponentFixture<SupermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupermanComponent],
      providers: [provideHttpClientTesting(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
