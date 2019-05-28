import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TableViewComponentComponent } from './table-view-component/table-view-component.component';
import { AddUpdatePopUpComponentComponent } from './add-update-pop-up-component/add-update-pop-up-component.component';
import {UserService} from './services/user-service.service';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
const appRoutes:Routes=[
  {path:'',component:AddUpdatePopUpComponentComponent},
  {path:'tableview',component:TableViewComponentComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TableViewComponentComponent,
    AddUpdatePopUpComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
