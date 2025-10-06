import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdeletetransac } from './mdeletetransac';

describe('Mdeletetransac', () => {
  let component: Mdeletetransac;
  let fixture: ComponentFixture<Mdeletetransac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mdeletetransac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdeletetransac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
