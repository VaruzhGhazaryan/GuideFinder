import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInlineNavbarComponent } from './app-inline-navbar.component';

describe('AppInlineNavbarComponent', () => {
  let component: AppInlineNavbarComponent;
  let fixture: ComponentFixture<AppInlineNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInlineNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInlineNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
