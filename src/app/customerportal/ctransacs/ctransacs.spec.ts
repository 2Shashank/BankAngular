import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctransacs } from './ctransacs';

describe('Ctransacs', () => {
  let component: Ctransacs;
  let fixture: ComponentFixture<Ctransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ctransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
