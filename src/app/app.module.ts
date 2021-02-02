import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';

import { PrivacyComponent } from './Components/privacy/privacy.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { MotionGraphicComponent } from './Components/motion-graphic/motion-graphic.component'

import { ConceptArtComponent } from './Components/concept-art/concept-art.component';
import { LoginComponent } from './Components/login/login.component';

import { GraphicDesignComponent } from './Components/graphic-design/graphic-design.component';
import { ThreedArtComponent } from './Components/threed-art/threed-art.component';
import { AlumniComponent } from './Components/alumni/alumni.component';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { VideoResourcesComponent } from './Components/video-resources/video-resources.component';
import { SoundResourcesComponent } from './Components/sound-resources/sound-resources.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    BlogComponent,
    QuestionsComponent,
    VideoResourcesComponent,
    SoundResourcesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }