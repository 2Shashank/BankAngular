import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchaccounts } from './fetchaccounts';

describe('Fetchaccounts', () => {
  let component: Fetchaccounts;
  let fixture: ComponentFixture<Fetchaccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchaccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchaccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
