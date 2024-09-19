import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableViewComponent } from './menu-table-view.component';

describe('MenuTableViewComponent', () => {
  let component: MenuTableViewComponent;
  let fixture: ComponentFixture<MenuTableViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTableViewComponent]
    });
    fixture = TestBed.createComponent(MenuTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
