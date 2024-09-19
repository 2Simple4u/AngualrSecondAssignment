import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableViewComponent } from './restaurant-table-view.component';

describe('RestaurantTableViewComponent', () => {
  let component: RestaurantTableViewComponent;
  let fixture: ComponentFixture<RestaurantTableViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantTableViewComponent]
    });
    fixture = TestBed.createComponent(RestaurantTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
