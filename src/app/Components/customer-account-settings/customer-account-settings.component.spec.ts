import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountSettingsComponent } from './customer-account-settings.component';

describe('CustomerAccountSettingsComponent', () => {
  let component: CustomerAccountSettingsComponent;
  let fixture: ComponentFixture<CustomerAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
