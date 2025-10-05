import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managerhome } from './managerhome';

describe('Managerhome', () => {
  let component: Managerhome;
  let fixture: ComponentFixture<Managerhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Managerhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managerhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
