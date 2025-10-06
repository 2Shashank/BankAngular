import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supdatecust } from './supdatecust';

describe('Supdatecust', () => {
  let component: Supdatecust;
  let fixture: ComponentFixture<Supdatecust>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Supdatecust]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supdatecust);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
