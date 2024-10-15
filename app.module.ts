import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent // Declare your components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MyServiceService, // Provide your services here
    provideClientHydration()
  ],
  bootstrap: [AppComponent] // Bootstrap your main app component
})
export class AppModule { }
