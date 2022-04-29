import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonBrightComponent } from './ui-button-bright.component';

describe('UiButtonBrightComponent', () => {
  let component: UiButtonBrightComponent;
  let fixture: ComponentFixture<UiButtonBrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiButtonBrightComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonBrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
