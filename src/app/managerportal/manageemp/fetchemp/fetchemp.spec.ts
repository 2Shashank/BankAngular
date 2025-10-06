import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchemp } from './fetchemp';

describe('Fetchemp', () => {
  let component: Fetchemp;
  let fixture: ComponentFixture<Fetchemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
