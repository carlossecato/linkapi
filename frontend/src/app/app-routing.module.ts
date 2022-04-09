import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { JobComponent } from './job/job.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "user"},
  {path: "user", component: UserComponent},
  {path: "", pathMatch: "full", redirectTo: "jobs"},
  {path: "jobs", component: JobComponent},
  {path: "user/create", component: AddUserComponent},
  {path: "jobs/create", component: AddJobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
