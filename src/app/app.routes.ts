
import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent, title: 'Nicole Gerlach' },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];
