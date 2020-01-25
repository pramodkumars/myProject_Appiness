import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUserComponent } from './github-user/github-user.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';


const routes: Routes = [

  { path: '', redirectTo: '/gituser', pathMatch: 'full' },
   { path: 'gituser', component: GithubUserComponent },
  { path: 'gituser/:id', component: UserRepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
