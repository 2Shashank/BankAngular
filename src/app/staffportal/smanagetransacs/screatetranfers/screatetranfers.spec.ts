import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screatetranfers } from './screatetranfers';

describe('Screatetranfers', () => {
  let component: Screatetranfers;
  let fixture: ComponentFixture<Screatetranfers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screatetranfers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screatetranfers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
