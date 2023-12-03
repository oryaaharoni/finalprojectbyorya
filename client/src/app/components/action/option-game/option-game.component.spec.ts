import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGameComponent } from './option-game.component';

describe('OptionGameComponent', () => {
  let component: OptionGameComponent;
  let fixture: ComponentFixture<OptionGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionGameComponent]
    });
    fixture = TestBed.createComponent(OptionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
