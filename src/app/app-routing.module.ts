import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoundResourcesComponent } from './Components/sound-resources/sound-resources.component';


const routes: Routes = [

  {path : 'soundres', component: SoundResourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }