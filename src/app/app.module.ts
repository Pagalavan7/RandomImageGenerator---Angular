import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchimgComponent } from './fetchimg/fetchimg.component';
import { DisimgComponent } from './disimg/disimg.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [AppComponent, FetchimgComponent, DisimgComponent, CardFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
