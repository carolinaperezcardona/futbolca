/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FutbolComponent } from './futbol.component';

describe('FutbolComponent', () => {
  let component: FutbolComponent;
  let fixture: ComponentFixture<FutbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
