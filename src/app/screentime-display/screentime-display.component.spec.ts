import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentimeDisplayComponent } from './screentime-display.component';

describe('ScreentimeDisplayComponent', () => {
  let component: ScreentimeDisplayComponent;
  let fixture: ComponentFixture<ScreentimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreentimeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreentimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
