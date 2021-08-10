import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrocitiesComponent } from './atrocities.component';

describe('AtrocitiesComponent', () => {
  let component: AtrocitiesComponent;
  let fixture: ComponentFixture<AtrocitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtrocitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrocitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
