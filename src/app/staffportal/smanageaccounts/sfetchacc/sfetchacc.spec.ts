import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sfetchacc } from './sfetchacc';

describe('Sfetchacc', () => {
  let component: Sfetchacc;
  let fixture: ComponentFixture<Sfetchacc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sfetchacc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sfetchacc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
