import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mbin } from './mbin';

describe('Mbin', () => {
  let component: Mbin;
  let fixture: ComponentFixture<Mbin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mbin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mbin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
