import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screatecust } from './screatecust';

describe('Screatecust', () => {
  let component: Screatecust;
  let fixture: ComponentFixture<Screatecust>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screatecust]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screatecust);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
