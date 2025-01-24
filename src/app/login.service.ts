import { Injectable } from '@angular/core';
import { ILoginResult } from './login/ILoginResult';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(username: string, password:string) : Promise<ILoginResult> {
    return new Promise((resolve) => {
      if(username ==='admin' && password === 'password') {
        resolve({loginSuccessful : true});
      } else {
        resolve({loginSuccessful : false});
      }
    })
  }
}
