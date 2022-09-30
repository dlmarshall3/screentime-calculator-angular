import { Component, ElementRef, EventEmitter, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screentime-form',
  templateUrl: './screentime-form.component.html',
  styleUrls: ['./screentime-form.component.css']
})
export class ScreentimeFormComponent implements OnChanges {
  @ViewChild('dailyInput', {static:false}) dailyInputRef!: ElementRef;
  @Output() screentimeSubmitted = new EventEmitter();

  rangeValue: number = 0;

  constructor() { }

  ngOnChanges(): void {
    
  }

  onButtonClicked(){
    console.log('test');
    const dailyScreentime = this.rangeValue;
    this.screentimeSubmitted.emit(dailyScreentime);
  }

}
