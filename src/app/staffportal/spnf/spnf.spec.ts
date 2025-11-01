import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spnf } from './spnf';

describe('Spnf', () => {
  let component: Spnf;
  let fixture: ComponentFixture<Spnf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spnf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spnf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
