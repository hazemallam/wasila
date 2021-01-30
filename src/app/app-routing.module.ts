import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoResourcesComponent } from './Components/video-resources/video-resources.component';


const routes: Routes = [
  {path : 'videores', component : VideoResourcesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }