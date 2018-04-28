import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatcherForcastListComponent } from './weatcher-forcast-list.component';

describe('WeatcherForcastListComponent', () => {
  let component: WeatcherForcastListComponent;
  let fixture: ComponentFixture<WeatcherForcastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatcherForcastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatcherForcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
