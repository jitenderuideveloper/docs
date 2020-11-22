import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LifeCycleComponent } from './components/lifecycles/life-cycle.component';
import { LifeCycleParentComponent } from './components/lifecycles/life-cycle-parent/life-cycle-parent.component';
import { LifeCycleChildComponent } from './components/lifecycles/life-cycle-child/life-cycle-child.component';
import { AfterContentParentComponent, AfterContentComponent, ChildComponent } from './components/lifecycles/after-content.component';
import { AfterViewParentComponent, AfterViewComponent, ChildViewComponent } from './components/lifecycles/after-view.component';
import { CounterParentComponent, MyCounterComponent } from './components/lifecycles/counter.component';
import { DoCheckParentComponent, DoCheckComponent } from './components/lifecycles/do-check.component';
import { OnChangesParentComponent, OnChangesComponent } from './components/lifecycles/on-changes.component';
import { PeekABooParentComponent } from './components/lifecycles/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/lifecycles/peek-a-boo.component';
import { SpyParentComponent } from './components/lifecycles/spy.component';
import { SpyDirective } from './components/lifecycles/spy.directive';

import { FormComponent } from './components/form/form.component';
import { NameEditorComponent } from './components/form/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/form/profile-editor/profile-editor.component';

import { FilterPipe } from './components/lifecycles/pipe/filter.pipe';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { TrackByComponent } from './components/track-by/track-by.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    LifeCycleParentComponent,
    LifeCycleChildComponent,
    LifeCycleComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,

    FilterPipe,

    NgforComponent,

    TrackByComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
