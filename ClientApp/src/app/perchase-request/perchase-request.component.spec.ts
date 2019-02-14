import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerchaseRequestComponent } from './perchase-request.component';

describe('PerchaseRequestComponent', () => {
  let component: PerchaseRequestComponent;
  let fixture: ComponentFixture<PerchaseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerchaseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerchaseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
