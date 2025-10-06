import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdeletetransacs } from './sdeletetransacs';

describe('Sdeletetransacs', () => {
  let component: Sdeletetransacs;
  let fixture: ComponentFixture<Sdeletetransacs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdeletetransacs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sdeletetransacs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
