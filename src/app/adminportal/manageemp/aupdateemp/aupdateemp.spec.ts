import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aupdateemp } from './aupdateemp';

describe('Aupdateemp', () => {
  let component: Aupdateemp;
  let fixture: ComponentFixture<Aupdateemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aupdateemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aupdateemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
