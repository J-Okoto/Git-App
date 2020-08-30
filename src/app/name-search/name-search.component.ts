import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repo';
import { NameRequestService} from '../name-request.service';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {

  user: User;
repo: Repos;
  constructor(public myService: NameRequestService, private repoService: NameRequestService) {
  }

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs('J-Okoto');
  }
}