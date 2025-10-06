import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcreatetransfer } from './mcreatetransfer';

describe('Mcreatetransfer', () => {
  let component: Mcreatetransfer;
  let fixture: ComponentFixture<Mcreatetransfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mcreatetransfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mcreatetransfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
