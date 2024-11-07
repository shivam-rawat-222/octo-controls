import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public showPassword: boolean = false;
  showLoader:boolean | undefined;
  disabled = '';
  active: any = 'Angular';
  constructor(
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['spruko@admin.com', [Validators.required, Validators.email]],
      password: ['sprukoadmin', Validators.required],
    });
  }

  // firebase
  email = 'spruko@admin.com';
  password = 'sprukoadmin';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login() {
    // this.disabled = "btn-loading"
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.showLoader = true;
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then(() => {
    /*      this.authorizeService.getToken();*/
          this.router.navigate(['/dashboard/sales']);
          console.clear();
        })
        .catch((_error: any) => {
          this._error = _error;
          this.router.navigate(['/']);
        });
    }

  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  //angular
  public loginForm!: FormGroup;
  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  Submit() {
    this.clearErrorMessage();
    if (this.email, this.password){
      console.log(this.email , this.password);
      if(this.email == 'spruko@admin.com' && this.password == 'sprukoadmin'){
        this.router.navigate(['/dashboard/sales']);
      }
    }
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
