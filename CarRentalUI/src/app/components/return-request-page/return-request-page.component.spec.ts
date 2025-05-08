import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestPageComponent } from './return-request-page.component';

describe('ReturnRequestPageComponent', () => {
  let component: ReturnRequestPageComponent;
  let fixture: ComponentFixture<ReturnRequestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnRequestPageComponent]
    });
    fixture = TestBed.createComponent(ReturnRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
