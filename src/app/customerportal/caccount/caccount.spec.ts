import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caccount } from './caccount';

describe('Caccount', () => {
  let component: Caccount;
  let fixture: ComponentFixture<Caccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Caccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
