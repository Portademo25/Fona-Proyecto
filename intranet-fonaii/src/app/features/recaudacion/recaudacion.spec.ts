import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recaudacion } from './recaudacion';

describe('Recaudacion', () => {
  let component: Recaudacion;
  let fixture: ComponentFixture<Recaudacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recaudacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recaudacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
