import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageemp } from './manageemp';

describe('Manageemp', () => {
  let component: Manageemp;
  let fixture: ComponentFixture<Manageemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Manageemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manageemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
