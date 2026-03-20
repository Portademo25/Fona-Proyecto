import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaJuridica } from './asesoria-juridica';

describe('AsesoriaJuridica', () => {
  let component: AsesoriaJuridica;
  let fixture: ComponentFixture<AsesoriaJuridica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaJuridica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoriaJuridica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
