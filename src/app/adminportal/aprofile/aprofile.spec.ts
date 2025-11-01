import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aprofile } from './aprofile';

describe('Aprofile', () => {
  let component: Aprofile;
  let fixture: ComponentFixture<Aprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
