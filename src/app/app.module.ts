import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PrivacyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
