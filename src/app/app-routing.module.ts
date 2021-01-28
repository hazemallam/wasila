import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';

const routes: Routes = [
  {path: 'graphic', component: GraphicDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }