import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smanagetransacs } from './smanagetransacs';

describe('Smanagetransacs', () => {
  let component: Smanagetransacs;
  let fixture: ComponentFixture<Smanagetransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Smanagetransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smanagetransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
