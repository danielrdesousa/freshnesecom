import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonSimpleComponent } from './ui-button-simple.component';

describe('UiButtonSimpleComponent', () => {
  let component: UiButtonSimpleComponent;
  let fixture: ComponentFixture<UiButtonSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiButtonSimpleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
