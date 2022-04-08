import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Job } from './job'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://localhost:3000";

  public readUsers(){
    return this.httpClient.get<User[]>(`${this.API_SERVER}/user`);
  }

  public readJobs(){
    return this.httpClient.get<User[]>(`${this.API_SERVER}/jobs`);
  }

  public createUser(user: User){
    return this.httpClient.post<User>(`${this.API_SERVER}/user/create`, user);
  }

  public createJob(job: Job){
    return this.httpClient.post<Job>(`${this.API_SERVER}/jobs/create`, job);
  }
}
