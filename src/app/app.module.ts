import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component'

import { ConceptArtComponent } from './components/concept-art/concept-art.component';
import { LoginComponent } from './components/login/login.component';

import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { ThreedArtComponent } from './components/threed-art/threed-art.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PrivacyComponent,
    ContactUsComponent,
    CoursesComponent,
    MotionGraphicComponent,
    ConceptArtComponent,
    LoginComponent,
    GraphicDesignComponent,
    ThreedArtComponent,
    AlumniComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }