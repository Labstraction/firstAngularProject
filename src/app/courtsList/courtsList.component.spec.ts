/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CourtsListComponent } from './courtsList.component';

describe('CourtsListComponent', () => {
  let component: CourtsListComponent;
  let fixture: ComponentFixture<CourtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
