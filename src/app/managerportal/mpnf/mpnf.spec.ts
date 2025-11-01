import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mpnf } from './mpnf';

describe('Mpnf', () => {
  let component: Mpnf;
  let fixture: ComponentFixture<Mpnf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mpnf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mpnf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
