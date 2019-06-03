import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { RihtContainerComponent } from './main-container/right-container/right-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    RihtContainerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
