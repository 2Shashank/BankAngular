import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smanageaccounts } from './smanageaccounts';

describe('Smanageaccounts', () => {
  let component: Smanageaccounts;
  let fixture: ComponentFixture<Smanageaccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Smanageaccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smanageaccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
