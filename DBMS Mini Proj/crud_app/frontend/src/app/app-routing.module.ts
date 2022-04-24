import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { AvgMarksComponent } from './avg-marks/avg-marks.component';

const routes: Routes = [
  {path: 'create', component:CreateComponent},
  {path: 'create/:id', component:CreateComponent},
  {path: 'read', component:ReadComponent},
  {path: 'avg-marks', component:AvgMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
