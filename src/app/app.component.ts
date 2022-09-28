import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screen-time';

  dailyScreentime: number = 0;
  
  passAlongScreentime(screentime: number){
    this.dailyScreentime = screentime;
  }


}
