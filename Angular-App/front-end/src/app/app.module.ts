import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Import routing module
import { MetricsComponent } from './metrics/metrics.component'; // Import Metrics component
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Include routing module here
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
