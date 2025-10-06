import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managecustomer } from './managecustomer';

describe('Managecustomer', () => {
  let component: Managecustomer;
  let fixture: ComponentFixture<Managecustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Managecustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managecustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
