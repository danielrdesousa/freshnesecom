import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonColoredComponent } from './ui-button-colored.component';

describe('UiButtonColoredComponent', () => {
  let component: UiButtonColoredComponent;
  let fixture: ComponentFixture<UiButtonColoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiButtonColoredComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
