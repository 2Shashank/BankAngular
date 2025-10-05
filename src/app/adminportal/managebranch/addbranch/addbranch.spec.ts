import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbranch } from './addbranch';

describe('Addbranch', () => {
  let component: Addbranch;
  let fixture: ComponentFixture<Addbranch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addbranch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addbranch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
