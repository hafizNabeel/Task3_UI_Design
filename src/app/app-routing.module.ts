import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './layout/add-emp/add-emp.component';
import { BaseComponent } from './layout/base/base.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TableComponent } from './layout/table/table.component';

const routes: Routes = [


  {path:'' , redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component:TableComponent},
  { path: 'blank', component:BlankpageComponent},

  { path: 'new', component: AddEmpComponent},
  {path:'**' , redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
