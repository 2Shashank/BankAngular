import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mprofile } from './mprofile';

describe('Mprofile', () => {
  let component: Mprofile;
  let fixture: ComponentFixture<Mprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
