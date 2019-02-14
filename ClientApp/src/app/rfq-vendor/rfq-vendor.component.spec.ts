import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqVendorComponent } from './rfq-vendor.component';

describe('RfqVendorComponent', () => {
  let component: RfqVendorComponent;
  let fixture: ComponentFixture<RfqVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
