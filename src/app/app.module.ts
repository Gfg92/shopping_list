import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { EditTableComponent } from './edit-table/edit-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ListTableComponent } from './list-table/list-table.component';
import { MatIconModule} from '@angular/material/icon';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    EditTableComponent,
    ListTableComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
