import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminportal } from './adminportal';

describe('Adminportal', () => {
  let component: Adminportal;
  let fixture: ComponentFixture<Adminportal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminportal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminportal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
