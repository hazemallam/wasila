import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component';
import { ConceptArtComponent } from './components/concept-art/concept-art.component';
import { LoginComponent } from './components/login/login.component';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { ThreedArtComponent } from './components/threed-art/threed-art.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { VideoResourcesComponent } from './components/video-resources/video-resources.component';


const routes: Routes = [
  {path:'events', loadChildren: () => import('./components/events-module/events-module.module').then(m => m.EventsModuleModule)},
  {path: 'register', component: RegisterComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'motion', component: MotionGraphicComponent},
  {path: 'concept', component: ConceptArtComponent},
  {path: 'login', component: LoginComponent},
  {path: 'graphic', component: GraphicDesignComponent},
  {path: '3d-art', component: ThreedArtComponent},
  {path : 'alumni', component: AlumniComponent},
  {path : 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'questions', component: QuestionsComponent},
  {path : 'videores', component : VideoResourcesComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
