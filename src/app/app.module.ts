import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScreentimeFormComponent } from './screentime-form/screentime-form.component';
import { ScreentimeDisplayComponent } from './screentime-display/screentime-display.component';
import { HeaderComponent } from './header/header.component';
import { roundingPipe } from './shared/rounding.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScreentimeFormComponent,
    ScreentimeDisplayComponent,
    HeaderComponent,
    roundingPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
