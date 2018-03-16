import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProvidenceComponent } from './book-providence.component';

describe('BookProvidenceComponent', () => {
  let component: BookProvidenceComponent;
  let fixture: ComponentFixture<BookProvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
