import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreedArtComponent } from './components/threed-art/threed-art.component';

const routes: Routes = [
  {path: '3d-art', component: ThreedArtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }