import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';

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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { ArticleComponent } from './Components/article//article.component';
import { MiniCoursesComponent } from './Components/mini-courses/mini-courses.component';
import { EventsModuleModule } from './Components/events-module/events-module.module';
import {NgxPayPalModule} from 'ngx-paypal';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';


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
    SoundResourcesComponent,
    NotFoundComponent,
    ArticleComponent,
    MiniCoursesComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar', 
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }) ,
    ReactiveFormsModule ,
    NgxAudioPlayerModule,
    NgxPaginationModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}