import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonDemoComponent } from './mat-button-demo.component';

describe('MatButtonDemoComponent', () => {
  let component: MatButtonDemoComponent;
  let fixture: ComponentFixture<MatButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
