import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estructura } from './estructura';

describe('Estructura', () => {
  let component: Estructura;
  let fixture: ComponentFixture<Estructura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estructura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estructura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
