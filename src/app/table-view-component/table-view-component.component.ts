import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-table-view-component',
  templateUrl: './table-view-component.component.html',
  styleUrls: ['./table-view-component.component.css']
})
export class TableViewComponentComponent implements OnInit {
  users: any;
  constructor(private _userservice: UserService, private _router: Router) { }

  ngOnInit() {
    this._userservice.getUsers().subscribe((user) => {
      this.users = user;
    }, (error) => {
      console.log(error);
    })
  }

  NewUser() {
    var user = new User();
    this._userservice.setter(user);
    this._router.navigate(['/']);
  }

}
