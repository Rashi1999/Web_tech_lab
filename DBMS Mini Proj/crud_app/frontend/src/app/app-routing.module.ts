import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { AvgMarksComponent } from './avg-marks/avg-marks.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginPageComponent},
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
