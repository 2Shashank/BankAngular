import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchemps } from './fetchemps';

describe('Fetchemps', () => {
  let component: Fetchemps;
  let fixture: ComponentFixture<Fetchemps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchemps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchemps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
