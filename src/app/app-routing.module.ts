import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenURLComponent } from './shorten-url/shorten-url.component';
import { RerouteComponent } from './reroute/reroute.component';


const routes: Routes = [
  { path: '', component: ShortenURLComponent },
  { path: ':id', component: RerouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
