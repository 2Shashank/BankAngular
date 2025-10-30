import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfunds } from './cfunds';

describe('Cfunds', () => {
  let component: Cfunds;
  let fixture: ComponentFixture<Cfunds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cfunds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfunds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
