import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuViewComponent } from './restaurant-menu-view.component';

describe('RestaurantMenuViewComponent', () => {
  let component: RestaurantMenuViewComponent;
  let fixture: ComponentFixture<RestaurantMenuViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMenuViewComponent]
    });
    fixture = TestBed.createComponent(RestaurantMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
