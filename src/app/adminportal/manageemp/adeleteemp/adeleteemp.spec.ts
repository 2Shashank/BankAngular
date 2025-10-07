import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adeleteemp } from './adeleteemp';

describe('Adeleteemp', () => {
  let component: Adeleteemp;
  let fixture: ComponentFixture<Adeleteemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adeleteemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adeleteemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
