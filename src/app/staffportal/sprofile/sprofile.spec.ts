import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprofile } from './sprofile';

describe('Sprofile', () => {
  let component: Sprofile;
  let fixture: ComponentFixture<Sprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
