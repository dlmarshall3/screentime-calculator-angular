import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screentime-form',
  templateUrl: './screentime-form.component.html',
  styleUrls: ['./screentime-form.component.css']
})
export class ScreentimeFormComponent implements OnInit {
  @ViewChild('dailyInput', {static:false}) dailyInputRef!: ElementRef;
  @Output() screentimeSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    const dailyScreentime = this.dailyInputRef.nativeElement.value;
    this.screentimeSubmitted.emit(dailyScreentime);
  }

}
