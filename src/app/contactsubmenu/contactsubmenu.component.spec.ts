import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsubmenuComponent } from './contactsubmenu.component';

describe('ContactsubmenuComponent', () => {
  let component: ContactsubmenuComponent;
  let fixture: ComponentFixture<ContactsubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
