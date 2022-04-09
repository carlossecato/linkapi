import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'email', 'password', 'phone'];
  dataSource: User[] = [];
  user = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readUsers().subscribe((result)=> {
      console.log(result); 
      this.dataSource = result;
    })
  }

}
