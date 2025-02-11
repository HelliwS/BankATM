import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AccountComponent } from './account/account.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'Account', component: AccountComponent},
    { path: 'SignUp', component: SignUpComponent}
];
