import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallemps } from './getallemps';

describe('Getallemps', () => {
  let component: Getallemps;
  let fixture: ComponentFixture<Getallemps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Getallemps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallemps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
