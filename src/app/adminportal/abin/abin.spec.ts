import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abin } from './abin';

describe('Abin', () => {
  let component: Abin;
  let fixture: ComponentFixture<Abin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
