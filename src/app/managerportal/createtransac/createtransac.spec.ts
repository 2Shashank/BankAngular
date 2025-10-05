import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createtransac } from './createtransac';

describe('Createtransac', () => {
  let component: Createtransac;
  let fixture: ComponentFixture<Createtransac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createtransac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createtransac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
