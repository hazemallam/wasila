import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumniComponent } from './Components/alumni/alumni.component';


const routes: Routes = [

  {path : 'alumni', component: AlumniComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }