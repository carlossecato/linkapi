import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Job } from '../job';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {
  displayedColumns  :  string[] = ['id', 'name', 'user', 'status', 'type', 'value', 'interval', 'fixed'];
  dataSource: Job[] = [];
  job = {} as any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createJobs(job: Job) {
    this.apiService.createJob(job).subscribe((result)=> {
      console.log(result);
    })
  }

}
