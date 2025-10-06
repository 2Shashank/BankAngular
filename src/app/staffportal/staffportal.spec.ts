import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffportal } from './staffportal';

describe('Staffportal', () => {
  let component: Staffportal;
  let fixture: ComponentFixture<Staffportal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Staffportal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staffportal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
