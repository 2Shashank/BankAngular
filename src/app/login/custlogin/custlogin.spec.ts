import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custlogin } from './custlogin';

describe('Custlogin', () => {
  let component: Custlogin;
  let fixture: ComponentFixture<Custlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Custlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
