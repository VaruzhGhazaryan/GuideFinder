import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeEventComponent } from './charge-event.component';

describe('ChargeEventComponent', () => {
  let component: ChargeEventComponent;
  let fixture: ComponentFixture<ChargeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
