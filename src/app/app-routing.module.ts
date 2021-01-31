import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component';

const routes: Routes = [
  {path:'events', loadChildren: () => import('./components/events-module/events-module.module').then(m => m.EventsModuleModule)},
  {path: 'register', component: RegisterComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'motion', component: MotionGraphicComponent}

]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
