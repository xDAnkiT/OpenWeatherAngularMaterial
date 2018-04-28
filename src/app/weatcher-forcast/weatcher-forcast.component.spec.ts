import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatcherForcastComponent } from './weatcher-forcast.component';

describe('WeatcherForcastComponent', () => {
  let component: WeatcherForcastComponent;
  let fixture: ComponentFixture<WeatcherForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatcherForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatcherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
