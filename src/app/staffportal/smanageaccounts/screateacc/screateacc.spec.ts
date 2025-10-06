import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screateacc } from './screateacc';

describe('Screateacc', () => {
  let component: Screateacc;
  let fixture: ComponentFixture<Screateacc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screateacc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screateacc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
