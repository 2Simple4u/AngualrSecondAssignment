import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestaurantViewComponent } from './user-restaurant-view.component';

describe('UserRestaurantViewComponent', () => {
  let component: UserRestaurantViewComponent;
  let fixture: ComponentFixture<UserRestaurantViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRestaurantViewComponent]
    });
    fixture = TestBed.createComponent(UserRestaurantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
