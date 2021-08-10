import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofexComponent } from './listofex.component';

describe('ListofexComponent', () => {
  let component: ListofexComponent;
  let fixture: ComponentFixture<ListofexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
