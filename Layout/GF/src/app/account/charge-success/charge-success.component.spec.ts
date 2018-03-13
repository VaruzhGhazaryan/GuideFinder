import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeSuccessComponent } from './charge-success.component';

describe('ChargeSuccessComponent', () => {
  let component: ChargeSuccessComponent;
  let fixture: ComponentFixture<ChargeSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
