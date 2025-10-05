import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managerportal } from './managerportal';

describe('Managerportal', () => {
  let component: Managerportal;
  let fixture: ComponentFixture<Managerportal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Managerportal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managerportal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
