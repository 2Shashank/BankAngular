import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletecustomer } from './deletecustomer';

describe('Deletecustomer', () => {
  let component: Deletecustomer;
  let fixture: ComponentFixture<Deletecustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Deletecustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deletecustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
