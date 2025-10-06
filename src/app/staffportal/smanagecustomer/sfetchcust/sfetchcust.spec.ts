import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sfetchcust } from './sfetchcust';

describe('Sfetchcust', () => {
  let component: Sfetchcust;
  let fixture: ComponentFixture<Sfetchcust>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sfetchcust]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sfetchcust);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
