import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UiTagComponent } from './ui-tag.component';

describe('UiTagComponent', () => {
  let component: UiTagComponent;
  let fixture: ComponentFixture<UiTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
