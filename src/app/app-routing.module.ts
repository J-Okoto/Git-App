import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { NameSearchComponent } from './name-search/name-search.component'; 
import { RepoSearchComponent } from './repo-search/repo-search.component'; 


export const ROUTES = [{ path: '', component: HomeComponent, }, 
{ path: 'NameSearch', component: NameSearchComponent }, 
{ path: 'RepoSearch', component: RepoSearchComponent },
{ path: '**', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
