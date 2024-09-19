import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOwnerTableViewComponent } from './restaurant-owner-table-view.component';

describe('RestaurantOwnerTableViewComponent', () => {
  let component: RestaurantOwnerTableViewComponent;
  let fixture: ComponentFixture<RestaurantOwnerTableViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantOwnerTableViewComponent]
    });
    fixture = TestBed.createComponent(RestaurantOwnerTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
