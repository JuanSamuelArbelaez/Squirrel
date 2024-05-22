import { Component, OnInit } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServices } from '../../services/userService';
import * as models from '../../models/models';

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

  constructor(private formBuilder: FormBuilder, private userServices: UserServices) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid){
      alert('Error. Try a valid login form');
    } else {
      var data: models.Credentials = new models.Credentials(
        this.loginForm?.get('password')?.value,
        "",
        this.loginForm?.get('email')?.value,
        ""
      );

      this.userServices.login(data)
      .then((response) => {
        // Manejo de la respuesta JSON
        console.log(response.message); // "Acceso concedido"
        console.log(response.user);    // Información del usuario
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
}