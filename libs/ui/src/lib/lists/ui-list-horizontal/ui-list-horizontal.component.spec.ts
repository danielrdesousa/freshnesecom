import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListHorizontalComponent } from './ui-list-horizontal.component';

describe('UiListHorizontalComponent', () => {
  let component: UiListHorizontalComponent;
  let fixture: ComponentFixture<UiListHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiListHorizontalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
