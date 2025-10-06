import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchtransacs } from './fetchtransacs';

describe('Fetchtransacs', () => {
  let component: Fetchtransacs;
  let fixture: ComponentFixture<Fetchtransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchtransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchtransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
