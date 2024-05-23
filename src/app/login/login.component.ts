import { Component, OnInit } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServices } from '../../services/userService';
import * as models from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/tokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SquirrelLogoComponent,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserServices,
    private tokenServices: TokenService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid){
      alert('Error. Try a valid login form');
    } else {
      var data: models.Credentials = {
        Password: this.loginForm?.get('password')?.value,
        Nickname: "",
        Email: this.loginForm?.get('email')?.value,
        ID: ""
      };

      this.userServices.login(data)
      .then((response) => {
        alert(response.message);
        this.tokenServices.setToken(response.userInfo)
        console.log(response.userInfo);
        if (this.tokenServices.isLogged()) {this.router.navigate(['/home'])}
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
}