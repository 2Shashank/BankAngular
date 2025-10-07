import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatebranch } from './updatebranch';

describe('Updatebranch', () => {
  let component: Updatebranch;
  let fixture: ComponentFixture<Updatebranch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatebranch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatebranch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
