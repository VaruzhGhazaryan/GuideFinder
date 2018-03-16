import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEventModalComponent } from './rate-event-modal.component';

describe('RateEventModalComponent', () => {
  let component: RateEventModalComponent;
  let fixture: ComponentFixture<RateEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
