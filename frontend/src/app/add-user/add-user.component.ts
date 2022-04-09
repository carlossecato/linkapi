import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'email', 'password', 'phone'];
  dataSource: User | undefined;
  user = {} as any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createUser(user: User){
    this.apiService.createUser(user).subscribe((result)=>{
      console.log(result);
    });
  }
}
