import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: 'issues', component: IssuesComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent, canActivate: [authGuard] }
];
