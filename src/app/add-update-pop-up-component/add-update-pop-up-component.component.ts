import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-update-pop-up-component',
  templateUrl: './add-update-pop-up-component.component.html',
  styleUrls: ['./add-update-pop-up-component.component.css']
})
export class AddUpdatePopUpComponentComponent implements OnInit {
  model: any = {};
  user: any;
  constructor(private _userservice: UserService, private _router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    debugger;
    this.user = this.model;
    this._userservice.createUser(this.user).subscribe((user) => {
      console.log(user);
      this._router.navigate(['/tableview']);
    }, (error) => {
      console.log(error);
    })
  }

  cancel() {
    this._router.navigate(['/tableview']);
  }
}
