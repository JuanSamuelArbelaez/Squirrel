import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'password-recovery', component: PasswordRecoveryComponent},
    { path: 'page-not-found', component: PageNotFoundComponent},
    { path: 'home', component: HomeComponent},
    { path: 'privacy-policy', component:PrivacyPolicyComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto, redirige a login
    { path: '**', redirectTo: '/page-not-found' },
];
