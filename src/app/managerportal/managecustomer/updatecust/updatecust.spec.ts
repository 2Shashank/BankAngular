import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecust } from './updatecust';

describe('Updatecust', () => {
  let component: Updatecust;
  let fixture: ComponentFixture<Updatecust>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatecust]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecust);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
