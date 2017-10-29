import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './views/feed/feed.component';

const routes: Routes = [
  {path: 'feed', component: FeedComponent },
  {path: '',   redirectTo: '/feed', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
