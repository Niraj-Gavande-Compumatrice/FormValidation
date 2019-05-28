import { Injectable } from '@angular/core';
import{Http, Headers, Response,RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:3000';
  private headers=new Headers({'content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  private user:User;
  constructor(private _http:Http) { }

  setter(user:User)
  {
    this.user=user;
  }
  gettter()
  {
    return this.user;
  }

  getUsers()
  {
    return this._http.get(this.baseUrl+'/users',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createUser(user:User)
  {
  return this._http.post(this.baseUrl+'/users',JSON.stringify(user),this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  errorHandler(error:Response)
  {
    return Observable.throw(error || "Server Error");
  }
}
