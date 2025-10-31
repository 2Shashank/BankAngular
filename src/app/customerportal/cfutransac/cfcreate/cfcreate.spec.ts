import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfcreate } from './cfcreate';

describe('Cfcreate', () => {
  let component: Cfcreate;
  let fixture: ComponentFixture<Cfcreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cfcreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfcreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
