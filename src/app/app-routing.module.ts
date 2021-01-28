import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptArtComponent } from './components/concept-art/concept-art.component';

const routes: Routes = [
  {path: 'concept', component: ConceptArtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }