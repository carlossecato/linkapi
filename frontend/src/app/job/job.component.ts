import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Job } from '../job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  name!: string;
    user!: string;
    status!: string;
    type!: string;
    value!: string;
    interval!: string;
    fixed!: string;

  displayedColumns  :  string[] = ['id', 'name', 'user', 'status', 'type', 'value', 'interval', 'fixed'];
  dataSource: Job[] = [];
  job = {};
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readJobs().subscribe((result)=> {
      console.log(result); 
      this.dataSource = result;
    })
  }

}
