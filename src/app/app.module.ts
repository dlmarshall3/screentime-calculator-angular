import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScreentimeFormComponent } from './screentime-form/screentime-form.component';
import { ScreentimeDisplayComponent } from './screentime-display/screentime-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreentimeFormComponent,
    ScreentimeDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
