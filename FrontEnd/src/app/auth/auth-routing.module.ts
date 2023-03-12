import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from '../authenticate/authenticate.component';
import { AuthActivate } from '../shared/guards/auth.activate';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: false,
        },
        title: "Login",
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: false,
        },
        title: "Register",
    },
    {
        path: 'auth/profile',
        component: AuthenticateComponent,
        title: "Profile",
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
        title: "Logout",
    },
    {
        path: 'auth/profile/:id',
        component: ProfileComponent,
        title: "Profile",
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
    }

]


export const AuthRoutingModule = RouterModule.forChild(routes);
