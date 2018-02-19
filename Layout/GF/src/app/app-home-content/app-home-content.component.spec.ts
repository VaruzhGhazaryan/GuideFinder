import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeContentComponent } from './app-home-content.component';

describe('AppHomeContentComponent', () => {
  let component: AppHomeContentComponent;
  let fixture: ComponentFixture<AppHomeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHomeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
