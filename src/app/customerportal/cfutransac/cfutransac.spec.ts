import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfutransac } from './cfutransac';

describe('Cfutransac', () => {
  let component: Cfutransac;
  let fixture: ComponentFixture<Cfutransac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cfutransac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfutransac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
