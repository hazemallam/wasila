 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component';

const routes: Routes = [
  {path: 'motion', component: MotionGraphicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }