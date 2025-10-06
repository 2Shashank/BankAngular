import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgettransacs } from './mgettransacs';

describe('Mgettransacs', () => {
  let component: Mgettransacs;
  let fixture: ComponentFixture<Mgettransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mgettransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mgettransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
