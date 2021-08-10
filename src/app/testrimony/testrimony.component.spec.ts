import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrimonyComponent } from './testrimony.component';

describe('TestrimonyComponent', () => {
  let component: TestrimonyComponent;
  let fixture: ComponentFixture<TestrimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestrimonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
