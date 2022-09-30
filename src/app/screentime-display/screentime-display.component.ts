import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-screentime-display',
  templateUrl: './screentime-display.component.html',
  styleUrls: ['./screentime-display.component.css']
})
export class ScreentimeDisplayComponent implements OnChanges {
    weeklyScreentime: number = 0;
    monthlyScreentime: number = 0;
    yearlyScreentime: number = 0;
    fiveYearScreentime: number = 0;
    tenYearScreentime: number = 0;
    twentyfiveYearScreentime: number = 0;
    fiftyYearScreentime: number = 0;

  @Input() dailyScreentime: number = 0;
  

  constructor() { }

  ngOnChanges(): void {
    this.dailyScreentime = this.dailyScreentime;
    this.weeklyScreentime = this.dailyScreentime * 7;
    this.monthlyScreentime = this.dailyScreentime * 30;
    this.yearlyScreentime = this.dailyScreentime * 365;
    this.fiveYearScreentime = this.yearlyScreentime * 5;
    this.tenYearScreentime = this.yearlyScreentime * 10;
    this.twentyfiveYearScreentime = this.yearlyScreentime * 25;
    this.fiftyYearScreentime = this.yearlyScreentime * 50;
  }

}
