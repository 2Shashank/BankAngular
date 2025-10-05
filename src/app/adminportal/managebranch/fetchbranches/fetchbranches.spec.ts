import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchbranches } from './fetchbranches';

describe('Fetchbranches', () => {
  let component: Fetchbranches;
  let fixture: ComponentFixture<Fetchbranches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchbranches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchbranches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
