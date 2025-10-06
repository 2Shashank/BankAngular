import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageaccounts } from './manageaccounts';

describe('Manageaccounts', () => {
  let component: Manageaccounts;
  let fixture: ComponentFixture<Manageaccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Manageaccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manageaccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
