import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managebranch } from './managebranch';

describe('Managebranch', () => {
  let component: Managebranch;
  let fixture: ComponentFixture<Managebranch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Managebranch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managebranch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
