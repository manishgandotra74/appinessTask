import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RepoComponent } from './components/repo/repo.component';


const routes: Routes = [
  {path :"", component:UsersComponent},
  {path :"repositories", component:RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
