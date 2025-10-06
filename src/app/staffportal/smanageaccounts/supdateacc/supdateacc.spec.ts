import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supdateacc } from './supdateacc';

describe('Supdateacc', () => {
  let component: Supdateacc;
  let fixture: ComponentFixture<Supdateacc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Supdateacc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supdateacc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
