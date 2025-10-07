import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchempbyid } from './fetchempbyid';

describe('Fetchempbyid', () => {
  let component: Fetchempbyid;
  let fixture: ComponentFixture<Fetchempbyid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fetchempbyid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetchempbyid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
