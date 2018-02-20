import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {

  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  document.getElementById("faqAnswer").style.display="none";
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

