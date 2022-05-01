import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListVerticalComponent } from './ui-list-vertical.component';

describe('UiListVerticalComponent', () => {
  let component: UiListVerticalComponent;
  let fixture: ComponentFixture<UiListVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiListVerticalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiListVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
