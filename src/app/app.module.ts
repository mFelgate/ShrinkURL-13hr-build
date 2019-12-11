import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenURLComponent } from './shorten-url/shorten-url.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { RerouteComponent } from './reroute/reroute.component';
@NgModule({
  declarations: [
    AppComponent,
    ShortenURLComponent,
    RerouteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
