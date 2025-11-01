import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apnf } from './apnf';

describe('Apnf', () => {
  let component: Apnf;
  let fixture: ComponentFixture<Apnf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Apnf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apnf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
