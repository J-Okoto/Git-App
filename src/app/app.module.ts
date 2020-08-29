import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule }   from '@angular/router'; 




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NameSearchComponent,
    RepoSearchComponent,
    FormComponent,
    
  ],

 

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
