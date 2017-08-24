/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaviortesComponent } from './faviortes.component';

describe('FaviortesComponent', () => {
  let component: FaviortesComponent;
  let fixture: ComponentFixture<FaviortesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaviortesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
