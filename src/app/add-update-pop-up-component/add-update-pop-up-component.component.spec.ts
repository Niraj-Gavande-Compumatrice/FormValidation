import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePopUpComponentComponent } from './add-update-pop-up-component.component';

describe('AddUpdatePopUpComponentComponent', () => {
  let component: AddUpdatePopUpComponentComponent;
  let fixture: ComponentFixture<AddUpdatePopUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdatePopUpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePopUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
