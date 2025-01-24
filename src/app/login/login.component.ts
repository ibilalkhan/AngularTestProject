import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ILoginResult } from './ILoginResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Username and pasword are required.';
      return;
    }

    const {username, password} = this.loginForm.value;

    this.loginService.login(username, password).then((result: ILoginResult) => {
      if(result.loginSuccessful) {
        this.errorMessage = '';
        alert('login successful');
      } else {
        this.errorMessage = 'Invalid username and password';
      }
    })
  }
}
