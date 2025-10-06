import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcreatetransac } from './mcreatetransac';

describe('Mcreatetransac', () => {
  let component: Mcreatetransac;
  let fixture: ComponentFixture<Mcreatetransac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mcreatetransac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mcreatetransac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
