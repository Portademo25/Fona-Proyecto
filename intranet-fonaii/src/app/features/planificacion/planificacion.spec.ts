import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planificacion } from './planificacion';

describe('Planificacion', () => {
  let component: Planificacion;
  let fixture: ComponentFixture<Planificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Planificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
