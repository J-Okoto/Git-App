import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule }   from '@angular/router'; 
import { NameRequestService} from './name-request.service';




import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { FormComponent } from './form/form.component';

import { ROUTES } from './app-routing.module';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NameSearchComponent,
    RepoSearchComponent,
    FormComponent,
    DateCountPipe,
    
  ],

 

  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES) , 
    FormsModule, 
    HttpClientModule, 
    
    

  ],
  providers: [NameRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
