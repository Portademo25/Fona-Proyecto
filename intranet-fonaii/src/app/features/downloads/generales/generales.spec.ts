import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generales } from './generales';

describe('Generales', () => {
  let component: Generales;
  let fixture: ComponentFixture<Generales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
