import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfetchtransac } from './mfetchtransac';

describe('Mfetchtransac', () => {
  let component: Mfetchtransac;
  let fixture: ComponentFixture<Mfetchtransac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfetchtransac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfetchtransac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
