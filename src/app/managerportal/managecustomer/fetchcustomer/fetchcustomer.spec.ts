import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchcustomer } from './fetchcustomer';

describe('Fetchcustomer', () => {
  let component: Fetchcustomer;
  let fixture: ComponentFixture<Fetchcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchcustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
