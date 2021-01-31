import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  {path:'events', loadChildren: () => import('./components/events-module/events-module.module').then(m => m.EventsModuleModule)},
  {path: 'register', component: RegisterComponent},
  {path: 'privacy', component: PrivacyComponent}

]
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
