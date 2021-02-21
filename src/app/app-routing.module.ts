import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { MotionGraphicComponent } from './Components/motion-graphic/motion-graphic.component';
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
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import {ArticleComponent} from './Components/article/article.component'
import {MiniCoursesComponent} from './Components/mini-courses/mini-courses.component'


const routes: Routes = [
  {path:'events', loadChildren: () => import('./Components/events-module/events-module.module').then(m => m.EventsModuleModule)},
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
  {path : 'videores', component : VideoResourcesComponent},
  {path : 'soundres', component: SoundResourcesComponent},
  {path:'admin', component:NotFoundComponent, canActivate:[AdminGuard]},
  {path : 'article', component: ArticleComponent},
  {path : 'minicourses', component: MiniCoursesComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }