import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderConfirmationPageComponent } from './user-order-confirmation-page.component';

describe('UserOrderConfirmationPageComponent', () => {
  let component: UserOrderConfirmationPageComponent;
  let fixture: ComponentFixture<UserOrderConfirmationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOrderConfirmationPageComponent]
    });
    fixture = TestBed.createComponent(UserOrderConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
