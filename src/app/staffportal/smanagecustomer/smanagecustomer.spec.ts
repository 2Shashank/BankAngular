import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smanagecustomer } from './smanagecustomer';

describe('Smanagecustomer', () => {
  let component: Smanagecustomer;
  let fixture: ComponentFixture<Smanagecustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Smanagecustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smanagecustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
