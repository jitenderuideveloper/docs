import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: '**',  redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
