import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomComponent } from './zoom/zoom.component';
import { Zoom2Component } from './zoom2/zoom2.component';

const routes: Routes = [

  {
    path:'',component:ZoomComponent
  },
  {
    path:'zoom2',component:Zoom2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
