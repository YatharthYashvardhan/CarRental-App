import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarDetailsComponent } from './update-car-details.component';

describe('UpdateCarDetailsComponent', () => {
  let component: UpdateCarDetailsComponent;
  let fixture: ComponentFixture<UpdateCarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
