import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeCycleParentComponent } from './components/lifecycles/life-cycle-parent/life-cycle-parent.component';
// import { LifeCycleComponent } from './components/lifecycles/life-cycle.component';
import { FormComponent } from './components/form/form.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { TrackByComponent } from './components/track-by/track-by.component';

const routes: Routes = [
  { path: 'lifecycle', component: LifeCycleParentComponent },
  // { path: 'lifecycle', component: LifeCycleComponent },
  { path: 'form', component: FormComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'trackby', component: TrackByComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
