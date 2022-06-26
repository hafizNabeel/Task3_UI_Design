import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './layout/base/base.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AddEmpComponent } from './layout/add-emp/add-emp.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TableComponent } from './layout/table/table.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    AddEmpComponent,
    SidebarComponent,
    TableComponent,
    BlankpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
