import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getcusts } from './getcusts';

describe('Getcusts', () => {
  let component: Getcusts;
  let fixture: ComponentFixture<Getcusts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Getcusts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getcusts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
