import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managetransactions } from './managetransactions';

describe('Managetransactions', () => {
  let component: Managetransactions;
  let fixture: ComponentFixture<Managetransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Managetransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managetransactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
