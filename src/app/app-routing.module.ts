import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { NameSearchComponent } from './name-search/name-search.component'; 
import { RepoSearchComponent } from './repo-search/repo-search.component'; 


const routes: Routes = [{ path: '', component: HomeComponent }, 
{ path: 'namesearch', component: NameSearchComponent }, 
{ path: 'reposearch', component: RepoSearchComponent }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
