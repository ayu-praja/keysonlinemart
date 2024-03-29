import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHotelComponent } from './hotel.component';

describe('BookHotelComponent', () => {
  let component: BookHotelComponent;
  let fixture: ComponentFixture<BookHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
