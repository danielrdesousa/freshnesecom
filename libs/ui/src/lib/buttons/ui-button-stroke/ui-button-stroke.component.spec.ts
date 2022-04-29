import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonStrokeComponent } from './ui-button-stroke.component';

describe('UiButtonStrokeComponent', () => {
  let component: UiButtonStrokeComponent;
  let fixture: ComponentFixture<UiButtonStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiButtonStrokeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
