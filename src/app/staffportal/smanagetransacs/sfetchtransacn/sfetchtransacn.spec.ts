import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sfetchtransacn } from './sfetchtransacn';

describe('Sfetchtransacn', () => {
  let component: Sfetchtransacn;
  let fixture: ComponentFixture<Sfetchtransacn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sfetchtransacn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sfetchtransacn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
