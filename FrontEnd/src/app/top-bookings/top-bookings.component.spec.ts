import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBookingsComponent } from './top-bookings.component';

describe('TopBookingsComponent', () => {
  let component: TopBookingsComponent;
  let fixture: ComponentFixture<TopBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
