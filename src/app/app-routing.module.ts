import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ListTableComponent },
  { path: 'editTable', component: EditTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
