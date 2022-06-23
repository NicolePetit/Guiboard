import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublisherDetailsComponent } from './publisher/publisher-details/publisher-details.component';
import { PublisherListComponent } from './publisher/publisher-list/publisher-list.component';
import { PublisherManagerComponent } from './publisher/publisher-manager/publisher-manager.component';
import { PublisherQuickAddComponent } from './publisher/publisher-quick-add/publisher-quick-add.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'publishers', component: PublisherListComponent, children :[
    {path:'new-quick-publisher', component: PublisherQuickAddComponent}
  ]},
  { path: 'publishers/new-publisher', component: PublisherManagerComponent },
  { path: 'publishers/:id/publisher-detail', component: PublisherDetailsComponent },
  { path: 'publishers/:id/manage-publisher', component: PublisherManagerComponent },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  // {path: '**', redirectTo : '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
