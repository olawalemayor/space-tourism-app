import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CrewComponent,
  DestinationComponent,
  HomeComponent,
  TechnologyComponent,
} from './views';

const routes: Routes = [
  { path: 'technology', component: TechnologyComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'destination', component: DestinationComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
