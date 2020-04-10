import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackblitzButtonComponent } from './stackblitz-button.component';

describe('StackblitzButtonComponent', () => {
  let component: StackblitzButtonComponent;
  let fixture: ComponentFixture<StackblitzButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackblitzButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackblitzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
