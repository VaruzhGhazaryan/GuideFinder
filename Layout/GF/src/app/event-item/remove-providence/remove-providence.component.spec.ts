import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProvidenceComponent } from './remove-providence.component';

describe('RemoveProvidenceComponent', () => {
  let component: RemoveProvidenceComponent;
  let fixture: ComponentFixture<RemoveProvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
