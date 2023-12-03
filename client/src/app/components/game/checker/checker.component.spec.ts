import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerComponent } from './checker.component';

describe('CheckerComponent', () => {
  let component: CheckerComponent;
  let fixture: ComponentFixture<CheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckerComponent]
    });
    fixture = TestBed.createComponent(CheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
