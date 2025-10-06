import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdeletecust } from './sdeletecust';

describe('Sdeletecust', () => {
  let component: Sdeletecust;
  let fixture: ComponentFixture<Sdeletecust>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdeletecust]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sdeletecust);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
