import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from '././events/events.component';
import { SingleEventsComponent } from '././single-events/single-events.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'allevents', component:EventsComponent},
  {path: 'singleevent/:id', component:SingleEventsComponent}
]

@NgModule({
  declarations: [EventsComponent, SingleEventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class EventsModuleModule { }
