import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSelectionDialogComponent } from './menu-selection-dialog.component';

describe('MenuSelectionDialogComponent', () => {
  let component: MenuSelectionDialogComponent;
  let fixture: ComponentFixture<MenuSelectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSelectionDialogComponent]
    });
    fixture = TestBed.createComponent(MenuSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
