import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login_guardian';

const routes: Routes = [
  { path: '', component: ListTableComponent },
  { path: 'editTable', component: EditTableComponent, canActivate:[LoginGuardian]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
