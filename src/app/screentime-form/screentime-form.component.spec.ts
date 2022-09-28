import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentimeFormComponent } from './screentime-form.component';

describe('ScreentimeFormComponent', () => {
  let component: ScreentimeFormComponent;
  let fixture: ComponentFixture<ScreentimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreentimeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreentimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
