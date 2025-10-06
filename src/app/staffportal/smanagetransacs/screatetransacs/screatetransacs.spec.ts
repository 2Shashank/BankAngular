import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screatetransacs } from './screatetransacs';

describe('Screatetransacs', () => {
  let component: Screatetransacs;
  let fixture: ComponentFixture<Screatetransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screatetransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screatetransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
