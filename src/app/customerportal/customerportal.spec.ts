import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerportal } from './customerportal';

describe('Customerportal', () => {
  let component: Customerportal;
  let fixture: ComponentFixture<Customerportal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerportal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerportal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
