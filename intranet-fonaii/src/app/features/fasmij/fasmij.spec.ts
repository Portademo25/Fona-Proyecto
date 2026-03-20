import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fasmij } from './fasmij';

describe('Fasmij', () => {
  let component: Fasmij;
  let fixture: ComponentFixture<Fasmij>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fasmij]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fasmij);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
